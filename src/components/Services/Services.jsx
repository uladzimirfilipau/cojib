import ServicesItem from '../ServicesItem/ServicesItem';
import { serviceList } from '../../utils/consts';
import './Services.css';

export default function Services() {
  const listItems = serviceList.map((item) => <ServicesItem key={item.id} item={item} />);

  return (
    <section className='services'>
      <h1 className='services__title'>Стоимость услуг</h1>

      <ul className='services__list'>{listItems}</ul>
    </section>
  );
}
