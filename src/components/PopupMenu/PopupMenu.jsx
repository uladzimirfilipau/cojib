import './PopupMenu.css';

import Navigation from '../Navigation/Navigation';

export default function PopupMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <section className='popup-menu'>
          <button
            type='button'
            aria-label='Закрыть меню'
            className='close-button'
            onClick={onClose}
          />
          <Navigation onClose={onClose} />
        </section>
      )}
    </>
  );
}
