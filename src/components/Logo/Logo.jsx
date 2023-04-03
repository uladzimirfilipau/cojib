import { NavLink } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  return (
    <NavLink exact to='/' className='logo' activeClassName='logo_active'>
      Лилия Филиппова
    </NavLink>
  );
}
