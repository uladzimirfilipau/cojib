import { useState } from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import PopupMenu from '../PopupMenu/PopupMenu';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header handleOpenMenu={handleOpenMenu} />
      <Main />
      <Footer />

      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}
