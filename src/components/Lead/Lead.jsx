import React from 'react';
import { NavLink } from 'react-router-dom';
import leadImage from '../../images/cojib/IMG_8337 MODEL @cojib PHOTO @maxcaxap.jpg';
import { EXP_YEARS, serviceList } from '../../utils/consts';
import './Lead.css';

export default function Lead() {
  const listItems = serviceList.map(({ id, title, service }) => (
    <li key={id} className='lead__list-item'>
      <NavLink to={`services/${service}`} className='lead__link'>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <section className='lead'>
      <img src={leadImage} alt='Лилия Филиппова' className='lead__image' />

      <article className='lead__article'>
        <h1 className='lead__title'>Парикмахер-стилист</h1>
        <p className='lead__text'>с&nbsp;{EXP_YEARS}-летним опытом&nbsp;работы</p>

        <ul className='lead__list'>{listItems}</ul>
      </article>
    </section>
  );
}
