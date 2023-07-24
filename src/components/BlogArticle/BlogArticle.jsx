import './BlogArticle.css';

export default function BlogArticle({ i }) {
  const { image, title, articleText, articleList, articleTextTwo, articleImages } = i;

  const articleTextItems = articleText.map((text, index) => (
    <p className='article__text' key={index}>
      {text}
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

        {articleImages && (
          <ul className='article__list-images'>
            {articleImages.map((item, index) => (
              <li className='article__list-item' key={index}>
                <img src={item.image} alt={item.title} className='article__item-image' />
              </li>
            ))}
          </ul>
        )}

        {articleTextTwo && <p className='article__text'>{articleTextTwo}</p>}
      </article>
    </section>
  );
}
