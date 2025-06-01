import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pizzas() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu', { replace: true }); // replace:true prevents back button returning to /pizzas
  }, [navigate]);

  return null; // nothing to render
}
