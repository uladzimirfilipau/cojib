import './Partners.css';
import { partners } from '../../utils/consts';

function Partners() {
  const patnersItems = partners.map(({ image, title }) => (
    <li key={title} className='partners__list-item'>
      <img src={image} alt={title} className='partners__image' />
    </li>
  ));

  return (
    <section className='partners'>
      <h2 className='partners__title'>Опыт работы с лидерами мировых брендов</h2>
      <ul className='partners__list'>{patnersItems}</ul>
    </section>
  );
}

export default Partners;
