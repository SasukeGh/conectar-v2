// src/services/whatsappService.js

class WhatsAppService {
  constructor() {
    // Replace with your CallMeBot phone number and API key
    this.phoneNumber = '+233257789272'; // Format: country code + number (e.g., 233201234567)
    this.apiKey = '5660546'; // Get this from CallMeBot
    this.baseUrl = 'https://api.callmebot.com/whatsapp.php';
  }

  // Format cart items for WhatsApp message
  formatOrderDetails(cartItems, totalAmount, customerInfo = null) {
    let message = ' *NEW ORDER* \n\n';
    
    if (customerInfo) {
      message += `👤 *Customer Details:*\n`;
      message += `Name: ${customerInfo.name}\n`;
      message += `Phone: ${customerInfo.phone}\n`;
      message += `Address: ${customerInfo.address}\n\n`;
    }
    
    message += `📋 *Order Summary:*\n`;
    message += `━━━━━━━━━━━━━━━━\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: GHC ${item.price} each\n`;
      
      if (item.extraIngredients && item.extraIngredients.length > 0) {
        message += `   Extras: ${item.extraIngredients.join(', ')}\n`;
      }
      
      message += `   Subtotal: GHC ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Total Amount: GHC ${totalAmount.toFixed(2)}*\n\n`;
    message += `⏰ *Order Time: ${new Date().toLocaleString()}*\n`;
    message += `📱 Please confirm receipt of this order by calling.`;
    
    return message;
  }

  // Send WhatsApp message via CallMeBot
  async sendOrderNotification(cartItems, totalAmount, customerInfo = null) {
    try {
      const message = this.formatOrderDetails(cartItems, totalAmount, customerInfo);
      
      // URL encode the message
      const encodedMessage = encodeURIComponent(message);
      
      // Construct the API URL
      const apiUrl = `${this.baseUrl}?phone=${this.phoneNumber}&text=${encodedMessage}&apikey=${this.apiKey}`;
      
      // Send the request
      const response = await fetch(apiUrl, {
        method: 'GET',
        mode: 'no-cors' // Required for CallMeBot API
      });
      
      console.log('WhatsApp notification sent successfully');
      return { success: true, message: 'Order notification sent to chef!' };
      
    } catch (error) {
      console.error('Error sending WhatsApp notification:', error);
      return { success: false, message: 'Failed to send notification' };
    }
  }

  // Alternative method using POST (if GET doesn't work)
  async sendOrderNotificationPOST(cartItems, totalAmount, customerInfo = null) {
    try {
      const message = this.formatOrderDetails(cartItems, totalAmount, customerInfo);
      
      const formData = new FormData();
      formData.append('phone', this.phoneNumber);
      formData.append('text', message);
      formData.append('apikey', this.apiKey);
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      console.log('WhatsApp notification sent successfully (POST)');
      return { success: true, message: 'Order notification sent to chef!' };
      
    } catch (error) {
      console.error('Error sending WhatsApp notification (POST):', error);
      return { success: false, message: 'Failed to send notification' };
    }
  }
}

export default new WhatsAppService();
