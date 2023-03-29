import { Link } from 'react-router-dom';
import { servicelinks, blogLinks, socialLinks } from '../../utils/consts';
import './FooterTop.css';

function FooterTop() {
  const footerLinks = servicelinks.map(({ title, link }) => (
    <Link key={title} to={link} className='footer__link'>
      {title}
    </Link>
  ));

  const articleLinks = blogLinks.map(({ name, link }) => (
    <Link key={name} to={link} className='footer__link'>
      {name}
    </Link>
  ));

  const listItems = socialLinks.map(({ id, title, link, img }) => (
    <a key={id} href={link} target='_blank' rel='noopener noreferrer' className='footer__icon-link'>
      <img src={img} alt={title} className='footer__icon-image' />
    </a>
  ));

  return (
    <section className='footer__top'>
      <nav className='footer__links'>
        Блог
        {articleLinks}
      </nav>

      <nav className='footer__links'>
        Услуги
        {footerLinks}
      </nav>

      <article className='footer__description'>
        Адрес
        <p className='footer__description-text'>Москва, м. Озёрная</p>
        <p className='footer__description-text'>Мичуринский проспект, д.80</p>
        <p className='footer__description-text'>
          Салон красоты&nbsp;
          <a
            href='https://yandex.ru/maps/org/salon_krasoty_bestlounge/124891032696/?ll=37.454915%2C55.673223&z=15'
            className='footer__description_link'
            target='_blank'
            rel='noopener noreferrer'
          >
            "BestLounge"
          </a>
        </p>
      </article>

      <article className='footer__description'>
        Контакты
        <nav className='footer__icon-links'>{listItems}</nav>
      </article>
    </section>
  );
}

export default FooterTop;
