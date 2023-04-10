import './Message.css';
import { socialLinks } from '../../utils/consts';

export default function Message() {
  const listItems = socialLinks.map(({ id, title, link, img }) => (
    <li key={id} className='message__item'>
      {title}
      <a href={link} target='_blank' rel='noopener noreferrer' className='message__link'>
        <img src={img} alt={title} className='message__image' />
      </a>
    </li>
  ));

  return (
    <section className='message'>
      <h2 className='message__title'>
        Есть&nbsp;вопрос? Хочешь&nbsp;записаться на&nbsp;услугу? Пиши&nbsp;в&nbsp;мессенджер!
      </h2>

      <ul className='message__links'>{listItems}</ul>
    </section>
  );
}
