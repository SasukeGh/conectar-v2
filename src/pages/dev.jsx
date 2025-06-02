import { useEffect } from 'react';

export default function Pizzas() {
  useEffect(() => {
    window.location.replace('https://sttech.vercel.app'); // This prevents back navigation too
  }, []);

  return null; // nothing to render
}
