import { Link } from 'react-router-dom';
import { serviceList, blogLinks, socialLinks, mapLink } from '../../utils/consts';
import './FooterTop.css';
import FooterLink from '../FooterLink/FooterLink';

export default function FooterTop() {
  const footerLinks = serviceList.map(({ title, link }) => (
    <Link key={title} to={link} className='footer__link'>
      {title}
    </Link>
  ));

  const articleLinks = blogLinks.map(({ title, link }) => (
    <Link key={title} to={link} className='footer__link'>
      {title}
    </Link>
  ));

  const listItems = socialLinks.map((item) => <FooterLink item={item} key={item.id} />);

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
            href={mapLink}
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
