import './AboutMe.css';
import cojibImage from '../../images/cojib-image.jpg';
import AboutTable from '../AboutTable/AboutTable';
import { aboutText } from '../../utils/consts';

export default function AboutMe() {
  const figcaptionText = aboutText.map((item, index) => (
    <p className='aboutme__text' key={index}>
      {item}
    </p>
  ));

  return (
    <section className='aboutme' aria-label='Обо мне'>
      <AboutTable />

      <article className='aboutme__article'>
        <figure className='aboutme__figure'>
          <h2 className='aboutme__title'>Обо мне</h2>

          <figcaption className='aboutme__figcaption'>{figcaptionText}</figcaption>
        </figure>
        <img src={cojibImage} alt='Лилия Филиппова' className='aboutme__image' />
      </article>
    </section>
  );
}
