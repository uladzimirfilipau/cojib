import houseImage from '../images/help-house.svg';
import loveImage from '../images/help-love.svg';
import foodImage from '../images/help-food.svg';
import helpImage from '../images/help-help.svg';
import educationImage from '../images/help-education.svg';
import healthImage from '../images/help-health.svg';

import cojibImage from '../images/cojib-image.jpg';
import cojibImage2 from '../images/cojib-image2.jpg';
import cojibImage3 from '../images/cojib-image3.jpg';

import Davines from '../images/partners/davines.png';
import Redken from '../images/partners/Redken.png';
import Revlon from '../images/partners/Revlon.png';
import Kerastase from '../images/partners/Kerastase.png';
import Kydra from '../images/partners/Kydra.png';
import Loreal from '../images/partners/loreal.png';
import Matrix from '../images/partners/MARTIX.png';
import Olaplex from '../images/partners/olaplex.png';
import Kaypro from '../images/partners/Kaypro.png';
import Lebel from '../images/partners/lebel.png';
import Wella from '../images/partners/Wella.png';
import pH from '../images/partners/pH.png';

import telegramIcon from '../images/icon-telegram.png';
import whatsAppIcon from '../images/icon-whatsapp.png';

export const MEDIUM_SCREEN = 768;

export const servicelinks = [
  { id: 1, title: 'Стрижка волос', link: '/cut-price' },
  { id: 2, title: 'Окрашивание волос', link: '/сolor-price' },
  { id: 3, title: 'Укладка волос', link: '/style-price' },
  { id: 4, title: 'Уход за волосами', link: '/сare-price' },
];

export const blogLinks = [
  { name: 'Про стрижки', link: '/blog' },
  { name: 'Про окрашивания', link: '/blog' },
  { name: 'Про укладки', link: '/blog' },
  { name: 'Про уходы', link: '/blog' },
];

export const tableCellsData = [
  { title: '7000', letter: '+', text: 'Стрижек' },
  { title: '3000', letter: '+', text: 'Окрашиваний' },
  { title: '8000', letter: '+', text: 'Укладок' },
  { title: '2000', letter: '+', text: 'Уходов' },
];

export const dignityList = [
  {
    id: '1',
    image: houseImage,
    alt: 'Индивидуальный подход',
    title: 'Индивидуальный подход',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '2',
    image: loveImage,
    alt: 'Профессиональные инструменты',
    title: 'Профессиональные инструменты',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '3',
    image: foodImage,
    alt: 'Профессиональная косметика',
    title: 'Профессиональная косметика',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '4',
    image: helpImage,
    alt: 'Гигиена',
    title: 'Гигиена',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '5',
    image: educationImage,
    alt: 'Образование',
    title: 'Образование',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '6',
    image: healthImage,
    alt: 'Опыт',
    title: 'Опыт',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
];

export const cards = [
  {
    id: 1,
    title: 'Лилия Филиппова',
    img: cojibImage,
  },

  {
    id: 2,
    title: 'Лилия Филиппова',
    img: cojibImage3,
  },

  {
    id: 3,
    title: 'Лилия Филиппова',
    img: cojibImage2,
  },
  {
    id: 4,
    title: 'Лилия Филиппова',
    img: cojibImage,
  },

  {
    id: 5,
    title: 'Лилия Филиппова',
    img: cojibImage3,
  },
];

export const partners = [
  { title: 'Davines', image: Davines },
  { title: 'Kaypro', image: Kaypro },
  { title: 'Kerastase', image: Kerastase },
  { title: 'Kydra', image: Kydra },
  { title: 'Lebel', image: Lebel },
  { title: 'Loreal', image: Loreal },
  { title: 'Matrix', image: Matrix },
  { title: 'Olaplex', image: Olaplex },
  { title: 'pH', image: pH },
  { title: 'Redken', image: Redken },
  { title: 'Revlon', image: Revlon },
  { title: 'Wella', image: Wella },
];

export const articlesList = [
  {
    id: '1',
    image: houseImage,
    alt: 'Индивидуальный подход',
    title: 'Индивидуальный подход',
    text: `Стрижка волос`,
    category: 'Стрижка',
    link: '/cut-price',
  },
  {
    id: '2',
    image: houseImage,
    alt: 'Профессиональные инструменты',
    title: 'Профессиональные инструменты',
    text: `Стрижка волос`,
    category: 'Стрижка',
    link: '/cut-price',
  },
  {
    id: '3',
    image: loveImage,
    alt: 'Профессиональная косметика',
    title: 'Профессиональная косметика',
    text: `Окрашивание волос`,
    category: 'Окрашивание',
    link: '/сolor-price',
  },
  {
    id: '4',
    image: loveImage,
    alt: 'Гигиена',
    title: 'Гигиена',
    text: `Окрашивание волос`,
    category: 'Окрашивание',
    link: '/сolor-price',
  },
  {
    id: '5',
    image: educationImage,
    alt: 'Образование',
    title: 'Образование',
    text: `Укладка волос`,
    category: 'Укладка',
    link: '/style-price',
  },
  {
    id: '6',
    image: healthImage,
    alt: 'Опыт',
    title: 'Опыт',
    text: `Уход за волосами`,
    category: 'Уход',
    link: '/сare-price',
  },
  {
    id: '7',
    image: healthImage,
    alt: 'Опыт',
    title: 'Опыт',
    text: `Уход за волосами`,
    category: 'Уход',
    link: '/сare-price',
  },
  {
    id: '8',
    image: educationImage,
    alt: 'Образование',
    title: 'Образование',
    text: `Укладка волос`,
    category: 'Укладка',
    link: '/style-price',
  },
];
export const ASKED_QUESTIONS = [
  {
    id: '01',
    subtitle: 'Почему волосы растут на груди?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '02',
    subtitle: 'Сколько шампуня нужно на всю жизнь?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '03',
    subtitle: 'Как брить волосы между булок?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '04',
    subtitle: 'Зачем человеку волосы в подмышках?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '05',
    subtitle: 'В какую фазу Луны лучше идти в парикмахерскую?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
  euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
  elit etiam cursus orci in. Id sed montes.`,
  },
];

export const socialLinks = [
  { id: 1, title: 'Telegram', link: 'https://t.me/cojib/', img: telegramIcon },
  { id: 2, title: 'WhatsApp', link: 'https://wa.me/message/WXNH2YKBRQA4I1', img: whatsAppIcon },
];
