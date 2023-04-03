import { useEffect, useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';

export default function Header({ handleOpenMenu }) {
  const width = useWindowWidth();
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setShowNavigation(false) : setShowNavigation(true);
  }, [width]);

  return (
    <header className='header'>
      <Logo />
      {showNavigation ? <Navigation /> : <BurgerButton handleOpenMenu={handleOpenMenu} />}
    </header>
  );
}
