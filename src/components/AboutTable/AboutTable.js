import './AboutTable.css';
import { tableCellsData } from './consts';

export default function AboutTable() {
  const tableCells = tableCellsData.map(({ title, letter, text }) => (
    <li key={text} className='aboutme__table-cell'>
      <p className='aboutme__cell-title'>
        {title}
        <span className='aboutme__cell-letter'>{letter}</span>
      </p>
      <p className='aboutme__cell-text'>{text}</p>
    </li>
  ));

  return <ul className='aboutme__table'>{tableCells}</ul>;
}
