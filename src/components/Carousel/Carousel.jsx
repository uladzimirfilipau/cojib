import { useEffect, useState } from 'react';
import {
  FULL_SCREEN,
  MEDIUM_SCREEN,
  ONE_SLIDE,
  TWO_SLIDES,
  FOUR_SLIDES,
  cards,
} from '../../utils/consts';
import './Carousel.css';
import { useWindowWidth } from '../../hooks/useWindowSize';

export default function Carousel() {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [slidesNumber, setSlidesNumber] = useState(null);

  const handleNext = () => {
    if (currentIndex < length - slidesNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const carouselContentStyle = { transform: `translateX(-${currentIndex * 100}%)` };

  const leftArrowClass = `left-arrow ${currentIndex > 0 && 'left-arrow_enable'}`;

  const rightArrowClass = `right-arrow ${
    currentIndex < length - slidesNumber && 'right-arrow_enable'
  }`;

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 4) {
      handleNext();
    }

    if (diff < -4) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  const listItems = cards.map(({ id, img, title }) => (
    <li
      key={id}
      className='carousel__item'
      style={carouselContentStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img className='carousel__content' src={img} alt={title} />
    </li>
  ));

  useEffect(() => {
    setLength(listItems.length);
  }, [listItems]);

  useEffect(() => {
    if (width >= FULL_SCREEN) {
      setSlidesNumber(FOUR_SLIDES);
    }
    if (width < FULL_SCREEN && width >= MEDIUM_SCREEN) {
      setSlidesNumber(TWO_SLIDES);
    }
    if (width < MEDIUM_SCREEN) {
      setSlidesNumber(ONE_SLIDE);
    }
  }, [width]);

  return (
    <section className='carousel'>
      <h2 className='carousel__title'>Мои работы</h2>

      <article className='carousel__article'>
        <button className={leftArrowClass} onClick={handlePrev}>
          &lt;
        </button>

        <ul className='carousel__container'>{listItems}</ul>

        <button className={rightArrowClass} onClick={handleNext}>
          &gt;
        </button>
      </article>
    </section>
  );
}
