import './Footer.css';
import FooterTop from '../FooterTop/FooterTop';
import FooterBottom from '../FooterBottom/FooterBottom';

export default function Footer() {
  return (
    <footer className='footer'>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
