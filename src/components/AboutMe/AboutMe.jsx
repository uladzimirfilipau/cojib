import { tableCellsData } from '../../utils/consts';
import './AboutMe.css';
import cojibImage from '../../images/cojib-image.jpg';

export default function AboutMe() {
  const tableCells = tableCellsData.map(({ title, letter, text }) => (
    <li key={text} className='aboutme__table-cell'>
      <p className='aboutme__cell-title'>
        {title}
        <span className='aboutme__cell-letter'>{letter}</span>
      </p>
      <p className='aboutme__cell-text'>{text}</p>
    </li>
  ));

  return (
    <section className='aboutme' aria-label='Обо мне'>
      <ul className='aboutme__table'>{tableCells}</ul>

      <article className='aboutme__article'>
        <figure className='aboutme__figure'>
          <h2 className='aboutme__title'>Обо мне</h2>

          <figcaption className='aboutme__figcaption'>
            <p className='aboutme__text'>
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
              Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового
              океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми
              необходимыми правилами.
            </p>
            <p className='aboutme__text'>
              Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими
              безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени
              Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о
              злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить
              себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и
              пустился в дорогу.
            </p>

            <ul className='aboutme__list'>
              <li className='aboutme__list-item'>Первый пункт списка</li>
              <li className='aboutme__list-item'>Второй пункт списка</li>
              <li className='aboutme__list-item'>Третий пункт списка</li>
            </ul>

            <p className='aboutme__text'>
              Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на
              силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок
              своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он
              продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей
              стране все переписывается по несколько раз. Единственное, что от меня осталось, это
              приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись
              рукописи, наш текст продолжил свой путь. И вскоре ему повстречался коварный
              составитель...
            </p>
          </figcaption>
        </figure>
        <img src={cojibImage} alt='Лилия Филиппова' className='aboutme__image' />
      </article>
    </section>
  );
}
