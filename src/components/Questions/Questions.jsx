import './Questions.css';
import { ASKED_QUESTIONS } from '../../utils/consts';
import Question from '../Question/Question';

export default function Questions() {
  const questions = ASKED_QUESTIONS.map((item) => <Question key={item.id} item={item} />);

  return (
    <section className='questions' aria-label='Ответы на вопросы и контакты для связи'>
      <h2 className='questions__title'>Часто задаваемые вопросы</h2>
      <ul className='questions__list'>{questions}</ul>
    </section>
  );
}
