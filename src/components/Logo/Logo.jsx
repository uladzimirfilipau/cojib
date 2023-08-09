import { NavLink } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  const linkClassName = ({ isActive }) => (isActive ? 'logo logo_active' : 'logo');

  return (
    <NavLink to='/' className={linkClassName}>
      Лилия Филиппова
    </NavLink>
  );
}
