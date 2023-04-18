import { useEffect, useState } from 'react';
import { articlesList } from '../../utils/consts';
import BlogButtons from '../BlogButtons/BlogButtons';
import BlogArticles from '../BlogArticles/BlogArticles';
import './Blog.css';

export default function Blog() {
  const all = 'Все';
  const [isActive, setIsActive] = useState(all);
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;

    if (value === all) {
      setData(articlesList);
      setIsActive(value);
    } else {
      const collection = articlesList.filter((i) => i.category === value);
      setData(collection);
      setIsActive(value);
    }
  };

  useEffect(() => {
    setData(articlesList);
    setCollection([...new Set(articlesList.map(({ category }) => category))]);
  }, []);

  return (
    <section
      className='blog'
      aria-label='Статьи про стрижки волос, окрашивания волос, укладку волос и уход за волосами'
    >
      <BlogButtons collection={collection} isActive={isActive} handleFilter={handleFilter} />

      <form className='blog__form'>
        <input
          className='blog__input'
          placeholder='Найти...'
          value={searchTerm}
          type='text'
          autoComplete='off'
          onChange={onChange}
        />
      </form>

      <BlogArticles data={data} search={searchTerm} />
    </section>
  );
}
