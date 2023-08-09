import { useState } from 'react';
import './Question.css';

export default function Question({ item }) {
  const { subtitle, text } = item;
  const [showText, setShowText] = useState(false);

  const toggleClick = () => {
    setShowText(!showText);
  };

  const buttonClassName = `questions__button ${showText && 'questions__button_active'}`;
  const buttonTextClassName = `questions__button-text ${
    showText && 'questions__button-text_active'
  }`;

  const subtitleClassName = `questions__subtitle ${showText && 'questions__subtitle_hover'}`;

  return (
    <li className='questions__item' onClick={toggleClick}>
      <button type='button' className={buttonClassName}>
        <span className={buttonTextClassName}>+</span>
      </button>
      <article className='questions__article'>
        <h2 className={subtitleClassName}>{subtitle}</h2>
        {showText && <p className='questions__text'>{text}</p>}
      </article>
    </li>
  );
}
