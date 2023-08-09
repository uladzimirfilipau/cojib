import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';
import './Navigation.css';
import { navLinksList } from './consts';

export default function Navigation({ onClose }) {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  const linkClassName = ({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link');

  const navLinks = navLinksList.map(({ id, title, link }) => (
    <NavLink key={id} to={link} className={linkClassName} onClick={onClose}>
      {title}
    </NavLink>
  ));

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <nav className='nav'>
      {isMobile && (
        <NavLink exact to='/' className={linkClassName} onClick={onClose}>
          Главная
        </NavLink>
      )}
      {navLinks}
    </nav>
  );
}
