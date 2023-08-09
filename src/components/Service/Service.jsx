import { useParams } from 'react-router-dom';
import './Service.css';
import { serviceList } from '../../utils/consts';
// import cojibImage from '../../images/cojib-image.jpg';

export default function Service() {
  let { serviceId } = useParams();

  const item = serviceList.find(({ service }) => service === serviceId);
  const { articleList, title, articleText, articleNote } = item;

  const articleItems = articleList.map((item) => (
    <li className='article__item' key={item.id}>
      {item.text}
      <ul className='article__subitem-list'>
        {item.price.map((subitem) => (
          <li className='article__subitem' key={subitem}>
            {subitem}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className='article'>
      {/* <img src={image} alt={title} className='article__image' /> */}
      <h1 className='article__title'>{title}</h1>

      <article className='article__container'>
        <p className='article__text'>{articleText}</p>
        <ul className='article__list'>{articleItems}</ul>
        <p className='article__note'>{articleNote}</p>
      </article>
    </section>
  );
}
