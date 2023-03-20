import houseImage from '../images/help-house.svg';
import loveImage from '../images/help-love.svg';
import foodImage from '../images/help-food.svg';
import helpImage from '../images/help-help.svg';
import educationImage from '../images/help-education.svg';
import healthImage from '../images/help-health.svg';

import cojibImage from '../images/cojib-image.jpg';
import cojibImage2 from '../images/cojib-image2.jpg';
import cojibImage3 from '../images/cojib-image3.jpg';

import Ollin from '../images/partners/ollin.png';
import Revlon from '../images/partners/Revlon.png';
import Schwarzkopf from '../images/partners/Schwarzkopf.png';

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
  { name: 'Про стрижки', link: '/cut-about' },
  { name: 'Про окрашивания', link: '/сoloring-about' },
  { name: 'Про укладки', link: '/styling-about' },
  { name: 'Про уходы', link: '/сare-about' },
];

export const tableCellsData = [
  { title: '7000', letter: '+', text: 'Стрижек' },
  { title: '3000', letter: '+', text: 'Окрашиваний' },
  { title: '8000', letter: '+', text: 'Укладок' },
  { title: '2000', letter: '+', text: 'Уходов' },
];

export const dignityList = [
  {
    ID: '1',
    IMAGE: houseImage,
    IMG_ALT: 'Индивидуальный подход',
    TITLE: 'Индивидуальный подход',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
  },
  {
    ID: '2',
    IMAGE: loveImage,
    IMG_ALT: 'Профессиональные инструменты',
    TITLE: 'Профессиональные инструменты',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
  },
  {
    ID: '3',
    IMAGE: foodImage,
    IMG_ALT: 'Профессиональная косметика',
    TITLE: 'Профессиональная косметика',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
  },
  {
    ID: '4',
    IMAGE: helpImage,
    IMG_ALT: 'Гигиена',
    TITLE: 'Гигиена',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
  },
  {
    ID: '5',
    IMAGE: educationImage,
    IMG_ALT: 'Образование',
    TITLE: 'Образование',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
  },
  {
    ID: '6',
    IMAGE: healthImage,
    IMG_ALT: 'Опыт',
    TITLE: 'Опыт',
    TEXT: `Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum
  tempus hac.`,
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
  { title: 'Ollin', image: Ollin },
  { title: 'Revlon', image: Revlon },
  { title: 'Schwarzkopf', image: Schwarzkopf },
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
  { id: 1, title: 'Telegram', link: 't.me/cojib/', img: telegramIcon },
  { id: 2, title: 'WhatsApp', link: 'wa.me/message/WXNH2YKBRQA4I1', img: whatsAppIcon },
];
