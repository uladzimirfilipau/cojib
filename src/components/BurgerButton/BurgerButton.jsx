import './BurgerButton.css';

export default function BurgerButton({ handleOpenMenu }) {
  return (
    <button className='burger-button' onClick={handleOpenMenu}>
      <span className='burger-button__span' />
    </button>
  );
}
