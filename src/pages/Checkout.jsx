// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { AiFillCheckCircle } from 'react-icons/ai';
import whatsappService from '../services/whatsappService';
import { cartActions } from '../store/shopping-cart/cartSlice';
import "../styles/checkout.css";

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all required fields');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsLoading(true);

    try {
      // Send WhatsApp notification to chef
      const result = await whatsappService.sendOrderNotification(
        cartItems, 
        totalAmount, 
        customerInfo
      );

      if (result.success) {
        // Clear the cart after successful order
        cartItems.forEach(item => {
          dispatch(cartActions.deleteItem(item.id));
        });
        
        setOrderPlaced(true);
      } else {
        alert('Failed to send order notification. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order has been sent to our chef and will be processed shortly. 
          You will receive a confirmation via WhatsApp. Contact us for more details.
        </span>
      </div>
    );
  }

  return (
    <Container className="checkout-container">
      <Row>
        <Col lg="8" md="8">
          <h3 className="mb-4">Checkout</h3>
          
          {/* Order Summary */}
          <div className="order-summary mb-4">
            <h5>Order Summary</h5>
            <div className="order-items">
              {cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <h6>{item.title}</h6>
                    <p>Quantity: {item.quantity}</p>
                    {item.extraIngredients && item.extraIngredients.length > 0 && (
                      <p>Extras: {item.extraIngredients.join(', ')}</p>
                    )}
                  </div>
                  <div className="item-price">
                    GHC {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="total-amount">
              <strong>Total: GHC {totalAmount.toFixed(2)}</strong>
            </div>
          </div>

          {/* Customer Information Form */}
          <form onSubmit={handlePlaceOrder}>
            <div className="customer-info">
              <h5 className="mb-3">Delivery Information</h5>
              
              <div className="form-group mb-3">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 0201234567"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="address">Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="3"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your complete delivery address"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="notes">Special Instructions (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  className="form-control"
                  rows="2"
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  placeholder="Any special instructions for your order..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-100"
                disabled={isLoading}
              >
                {isLoading ? 'Placing Order...' : 'Place Order'}
              </button>
            </div>
          </form>
        </Col>
        
        <Col lg="4" md="4">
          <div className="order-note">
            <h5>Important Notes:</h5>
            <ul>
              <li>Delivery time: 30-45 minutes</li>
              <li>You will receive order confirmation via call.</li>
              <li>Payment on delivery</li>
              <li>Contact us if you need to modify your order</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
