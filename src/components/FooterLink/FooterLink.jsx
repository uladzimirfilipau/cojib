import { useState } from 'react';
import './FooterLink.css';

export default function FooterLink({ item }) {
  const { id, title, link, img } = item;

  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(!isHovering);
  };

  const onMouseLeave = () => {
    setIsHovering(!isHovering);
  };

  const textClassName = `footer__icon-text ${isHovering && 'footer__icon-text_active'}`;

  return (
    <a
      key={id}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='footer__icon-link'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={img} alt={title} className='footer__icon-image' />
      <p className={textClassName}>{title}</p>
    </a>
  );
}
