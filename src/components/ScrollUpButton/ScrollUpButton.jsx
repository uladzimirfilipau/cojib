import { useEffect, useState } from 'react';
import './ScrollUpButton.css';

export default function ScrollUpButton() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleVisibleButton = () => {
    setShowScrollUp(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
    return () => window.removeEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    showScrollUp && <button type='button' className='scrollup-button' onClick={handleScrollUp} />
  );
}
