import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <h2 className='notfound__subtitle'>Ой, такая страница не найдена =('_')=</h2>
      <p className='notfound__text'>
        Возможно Вы сделали запрос к несуществующей странице или эта страница находится в разработке
      </p>
      <NavLink to='/' className='notfound__link'>
        Вернуться на главную
      </NavLink>
    </section>
  );
}
