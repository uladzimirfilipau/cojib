import './ServicesArticle.css';
import cojibImage from '../../images/cojib-image.jpg';

export default function ServicesArticle({ i }) {
  const { title, articleText, articleList, articleNote } = i;
  const articleItems = articleList.map((item, index) => (
    <li className='article__item' key={index}>
      {item}
    </li>
  ));

  return (
    <section className='article'>
      <img src={cojibImage} alt='Лилия Филиппова' className='article__image' />
      <h1 className='article__title'>{title}</h1>

      <article className='article__container'>
        <p className='article__text'>{articleText}</p>
        <ul className='article__list'>{articleItems}</ul>
        <p className='article__note'>{articleNote}</p>
      </article>
    </section>
  );
}
