import './BlogArticle.css';

export default function BlogArticle({ i }) {
  const { image, title, articleText, articleList, articleTextTwo } = i;

  const articleTextItems = articleText.map((item, index) => (
    <p className='article__text' key={index}>
      {item}
    </p>
  ));

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
        {articleTextItems}
        <ul className='article__list'>{articleListItems}</ul>
        {articleTextTwo ? <p className='article__text'>{articleTextTwo}</p> : null}
      </article>
    </section>
  );
}
