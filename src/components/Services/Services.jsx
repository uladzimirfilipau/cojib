import ServicesListItem from '../ServicesListItem/ServicesListItem';
import { serviceList } from '../../utils/consts';
import './Services.css';

export default function Services() {
  const listItems = serviceList.map((item) => <ServicesListItem key={item.id} item={item} />);

  return (
    <section className='services'>
      <article className='services__article'>
        <h1 className='services__title'>Стоимость услуг</h1>
      </article>

      <ul className='services__list'>{listItems}</ul>
    </section>
  );
}
