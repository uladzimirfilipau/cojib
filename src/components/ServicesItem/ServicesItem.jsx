import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesItem.css';

export default function ServicesItem({ item }) {
  const { title, text, price, service } = item;
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(!isHovering);
  };

  const onMouseLeave = () => {
    setIsHovering(!isHovering);
  };

  const itemClassName = `services__list-item ${isHovering && 'services__list-item_active'}`;
  const titleClassName = `services__item-title ${isHovering && 'services__item-title_active'}`;
  const textClassName = `services__item-text ${isHovering && 'services__item-text_active'}`;

  return (
    <li className={itemClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <p className='services__item-price'>{price}</p>
      <p className={textClassName}>{text}</p>

      <NavLink
        to={service}
        className='services__item-button'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Подробнее
      </NavLink>
    </li>
  );
}
