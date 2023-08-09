import './AboutMe.css';
import image from '../../images/cojib/IMG_8372 MODEL @cojib PHOTO @maxcaxap.jpg';
import image2 from '../../images/cojib/IMG_0029 MODEL @cojib PHOTO @maxcaxap.jpg';
import AboutTable from '../AboutTable/AboutTable';
import { aboutText, aboutText2 } from './consts';

export default function AboutMe() {
  const figcaptionText = aboutText.map((item, index) => (
    <p className='aboutme__text' key={index}>
      {item}
    </p>
  ));

  const figcaptionText2 = aboutText2.map((item, index) => (
    <p className='aboutme__text' key={index}>
      {item}
    </p>
  ));

  return (
    <section className='aboutme' aria-label='Обо мне'>
      <AboutTable />
      <h2 className='aboutme__title'>Обо мне</h2>

      <article className='aboutme__article'>
        <figure className='aboutme__figure'>
          <figcaption className='aboutme__figcaption'>{figcaptionText}</figcaption>
          <img src={image} alt='Лилия Филиппова' className='aboutme__image' />
        </figure>

        <figure className='aboutme__figure aboutme__figure_reverse'>
          <img src={image2} alt='Лилия Филиппова' className='aboutme__image' />
          <figcaption className='aboutme__figcaption'>{figcaptionText2}</figcaption>
        </figure>
      </article>
    </section>
  );
}
