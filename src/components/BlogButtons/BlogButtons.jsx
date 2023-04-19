import './BlogButtons.css';

export default function BlogButtons({ handleFilter, collection, isActive }) {
  const all = 'Все';

  const buttons = collection.map((item, index) => (
    <li key={index}>
      <button
        className={isActive === item ? 'blog__button blog__button_active' : 'blog__button'}
        value={item}
        onClick={handleFilter}
      >
        {item}
      </button>
    </li>
  ));

  return (
    <nav className='blog__nav'>
      <ul className='blog__nav-list'>
        <li>
          <button
            className={isActive === all ? 'blog__button blog__button_active' : 'blog__button'}
            value={all}
            onClick={handleFilter}
          >
            {all}
          </button>
        </li>

        {buttons}
      </ul>
    </nav>
  );
}
