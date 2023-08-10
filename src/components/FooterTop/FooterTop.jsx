import { Link } from 'react-router-dom';
import { serviceList, socialLinks, mapLink } from '../../utils/consts';
import './FooterTop.css';
import FooterLink from '../FooterLink/FooterLink';

export default function FooterTop() {
  // const articleLinks = blogLinks.map(({ title, link }) => (
  //   <Link key={title} to={link} className='footer__link'>
  //     {title}
  //   </Link>
  // ));

  const footerLinks = serviceList.map(({ title, service }) => (
    <li>
      <Link key={title} to={`services/${service}`} className='footer__link'>
        {title}
      </Link>
    </li>
  ));

  const listItems = socialLinks.map((item) => <FooterLink item={item} key={item.id} />);

  return (
    <section className='footer__top'>
      {/* <nav className='footer__links'>
        <h2 className='footer__title'>Блог</h2>
        {articleLinks}
      </nav> */}

      <nav className='footer__list'>
        <h2 className='footer__title'>Услуги</h2>
        <ul className='footer__list'>{footerLinks}</ul>
      </nav>

      <article className='footer__list'>
        <h2 className='footer__title'>Адрес</h2>
        <ul className='footer__list'>
          <li>
            <p className='footer__text'>Москва</p>
          </li>
          <li>
            <p className='footer__text'>м. Озёрная</p>
          </li>
          <li>
            <p className='footer__text'>Мичуринский проспект, д.80</p>
          </li>
          <li>
            <p className='footer__text'>
              Салон красоты&nbsp;
              <a
                href={mapLink}
                className='footer__list-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                "Bestlounge"
              </a>
            </p>
          </li>
        </ul>
      </article>

      <article className='footer__list'>
        <h2 className='footer__title'>Контакты</h2>
        <ul className='footer__list'>{listItems}</ul>
      </article>
    </section>
  );
}
