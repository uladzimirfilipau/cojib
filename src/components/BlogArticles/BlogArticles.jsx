import { NavLink } from 'react-router-dom';
import './BlogArticles.css';

export default function BlogArticles({ data, search }) {
  const listItems = data
    .filter((item) => {
      const text = item.title.toLowerCase();
      return text.includes(search.toLowerCase());
    })
    .map(({ id, image, title, link }) => (
      <li key={id} className='blog__item'>
        <img src={image} alt={title} className='blog__item-image' />
        <p className='blog__item-text'>{title}</p>
        <NavLink to={link} className='blog__item-button'>
          Читать
        </NavLink>
      </li>
    ));

  return <ul className='blog__list'>{listItems}</ul>;
}
