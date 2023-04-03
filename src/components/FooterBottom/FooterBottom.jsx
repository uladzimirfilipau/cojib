import './FooterBottom.css';

export default function FooterBottom() {
  const date = new Date().getFullYear();

  return (
    <section className='footer__bottom'>
      <p className='footer__copyright'>{date}&nbsp;©&nbsp;Лилия Филиппова</p>
    </section>
  );
}
