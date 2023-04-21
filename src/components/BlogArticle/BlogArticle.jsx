import './BlogArticle.css';

export default function BlogArticle({ i }) {
  const { image, title, articleText, articleList } = i;

  const articleListItems = articleList.map((item, index) => (
    <li className='article__item' key={index}>
      {item}
    </li>
  ));

  return (
    <section className='article'>
      <img src={image} alt={title} className='article__image' />
      <h1 className='article__title'>{title}</h1>

      <article className='article__container'>
        <p className='article__text'>{articleText}</p>
        <ul className='article__list'>{articleListItems}</ul>
      </article>
    </section>
  );
}
