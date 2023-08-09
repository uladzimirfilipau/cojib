import './Questions.css';
import Question from '../Question/Question';
import { ASKED_QUESTIONS } from './consts';

export default function Questions() {
  const questions = ASKED_QUESTIONS.map((item) => <Question key={item.id} item={item} />);

  return (
    <section className='questions' aria-label='Ответы на вопросы и контакты для связи'>
      <h1 className='questions__title'>Часто задаваемые вопросы</h1>
      <ul className='questions__list'>{questions}</ul>
    </section>
  );
}
