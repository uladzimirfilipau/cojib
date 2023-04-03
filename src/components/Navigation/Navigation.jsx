import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';
import './Navigation.css';

export default function Navigation({ onClose }) {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <nav className='nav'>
      {isMobile && (
        <NavLink
          exact
          to='/'
          className='nav__link'
          activeClassName='nav__link_active'
          onClick={onClose}
        >
          Главная
        </NavLink>
      )}

      <NavLink
        to='/blog'
        className='nav__link'
        activeClassName='nav__link_active'
        onClick={onClose}
      >
        Блог
      </NavLink>

      <NavLink
        to='/services'
        className='nav__link'
        activeClassName='nav__link_active'
        onClick={onClose}
      >
        Услуги
      </NavLink>

      <NavLink
        to='/contacts'
        className='nav__link'
        activeClassName='nav__link_active'
        onClick={onClose}
      >
        Контакты
      </NavLink>
    </nav>
  );
}
