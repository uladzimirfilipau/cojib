import React from 'react';
import { NavLink } from 'react-router-dom';
import leadImage from '../../images/cojib-image.jpg';
import { servicelinks } from '../../utils/consts';
import './Lead.css';

function Lead() {
  const listItems = servicelinks.map(({ id, title, link }) => (
    <li key={id} className='lead__list-item'>
      <NavLink to={link} className='lead__link'>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <section className='lead'>
      <img src={leadImage} alt='Лилия Филиппова' className='lead__image' />

      <article className='lead__article'>
        <h1 className='lead__title'>Профессиональный парикмахер-стилист</h1>
        <p className='lead__title'>с&nbsp;15-летним опытом&nbsp;работы</p>

        <ul className='lead__list'>{listItems}</ul>
      </article>
    </section>
  );
}

export default Lead;
