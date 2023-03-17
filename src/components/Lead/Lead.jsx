import React from 'react';
import leadImage from '../../images/cojib-image.jpg';
import './Lead.css';

function Lead() {
  return (
    <section className='lead'>
      <img src={leadImage} alt='Лилия Филиппова' class='lead__image' />

      <article className='lead__article'>
        <h1 className='lead__title'>Профессиональный парикмахер-стилист</h1>
        <p className='lead__title'>с&nbsp;15-летним опытом&nbsp;работы.</p>

        <ul className='lead__list'>
          <li className='lead__list-item'>Стрижка волос</li>
          <li className='lead__list-item'>Окрашивание волос</li>
          <li className='lead__list-item'>Укладка волос</li>
          <li className='lead__list-item'>Уход за волосами</li>
        </ul>
      </article>
    </section>
  );
}

export default Lead;
