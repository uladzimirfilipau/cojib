import './Dignity.css';
import { dignityList } from '../../utils/consts';

function Dignity() {
  const listItems = dignityList.map(({ id, title, text }) => (
    <li key={id} className='dignity__list-item'>
      <h3 className='dignity__list-title'>{title}</h3>
      <p className='dignity__list-text'>{text}</p>
    </li>
  ));

  return (
    <section className='dignity'>
      <h2 className='dignity__title'>Мои преимущества</h2>
      <ul className='dignity__list'>{listItems}</ul>
    </section>
  );
}

export default Dignity;
