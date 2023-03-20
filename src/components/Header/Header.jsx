import { useEffect, useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';

function Header({ handleOpenMenu }) {
  const width = useWindowWidth();
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setShowLinks(false) : setShowLinks(true);
  }, [width]);

  return (
    <header className='header'>
      <Logo />
      {showLinks ? <Navigation /> : <BurgerButton handleOpenMenu={handleOpenMenu} />}
    </header>
  );
}

export default Header;
