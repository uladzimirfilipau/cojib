import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onClose, isMobile }) {
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

export default Navigation;
