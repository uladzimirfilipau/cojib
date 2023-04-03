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

export const serviceList = [
  {
    id: 1,
    title: 'Стрижка волос',
    text: '*Укладка волос входит в стоимость',
    price: '4000*',
    link: '/cut-price',
    articleText:
      'Индивидуальная стрижка, при которой учитываются Ваша внешность, форма головы, а также структура, густота, плотность и направление роста волос.',
    articleList: ['Стрижка с дневной укладкой от 4000р', 'Стрижка с коктейльной укладкой от 5000р'],
  },
  {
    id: 2,
    title: 'Окрашивание волос',
    text: '*Укладка волос не входит в стоимость ',
    price: 'от 3000*',
    link: '/сolor-price',
    articleText:
      'Окрашивание волос давно стало бережным и безопасным процессом, а значит, цвет волос можно менять чаще без вреда для их здоровья.',
    articleNote: '*Стоимость тонирования рассчитывается дополнительно',
    articleList: [
      'Тонирование от 3000р',
      'Мелирование* от 3000р',
      'Окрашивание от 4000р',
      'AirTouch* и другие сложные техники от 5500р',
    ],
  },
  {
    id: 3,
    title: 'Укладка волос',
    text: '',
    price: 'от 1500',
    link: '/style-price',
    articleText:
      'Сделаю укладку волос на свадьбу, выпускной, важный вечер или ответственное мероприятие.',
    articleList: [
      'Дневная укладка волос от 1500р',
      'Коктейльная укладка волос от 2000р',
      'Вечерняя причёска от 3000р',
    ],
  },
  {
    id: 4,
    title: 'Уход за волосами',
    text: ' ',
    price: 'от 500',
    link: '/сare-price',
    articleText:
      'Я подберу для Вас индивидуальный уход, который улучшит структуру волос или будет основой при окрашивании.',
    articleList: [
      'Маска от 500р',
      'Защита при осветлении Ollinplex, Olaplex от 500р до 2500р',
      'Глубокое восстановление волос Ph 2500р',
      'Абсолютное счастье для волос Lebel от 4000р до 5500р',
    ],
  },
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
    id: '4',
    image: helpImage,
    alt: 'Гигиена',
    title: 'Гигиена',
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
    id: '7',
    image: healthImage,
    alt: 'Комфортная атмосфера',
    title: 'Комфортная атмосфера',
    text: `Текст текст текст текст текст текст текст текст текст текст текст текст текст`,
  },
  {
    id: '8',
    image: healthImage,
    alt: 'Расположение',
    title: 'Расположение',
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
    title: 'Стрижка Боб',
    category: 'Стрижка',
    articleText: 'Боб - одна из самых популярных коротких стрижек. ',
    articleList: [
      'Особо удачно смотрится в сочетании с круглым овалом лица',
      'Правильная укладка способна подчеркнуть изящество шеи и сделать образ более утонченным',
      'Хорошо справляется с отвлечением внимания от широкого лба',
      'Боб визуально омолаживает на 3-10 лет',
      'Асимметричный вариант способен сильно преобразить и придать дерзости',
      'Прическа подходит для любой погоды',
    ],
    link: '/cut-article',
  },
  {
    id: '2',
    image: loveImage,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    articleText:
      'Окрашивание волос — серьезный шаг, к которому надо быть готовой, как морально так и физически.',
    articleList: [
      'Окрашивание волос давно стало бережным, а значит, цвет волос можно менять чаще без вреда для их здоровья',
      'Шатуш, балаяж, эйртач, омбре — это все виды мелирования',
      'Колорирование делает цвет волос правильно неоднородным — прическа сразу приобретает объем, а пряди красиво переливаются на свету',
    ],
    link: '/сolor-article',
  },
  {
    id: '3',
    image: educationImage,
    title: 'Укладка волос',
    category: 'Укладка',
    articleText:
      'Укладка волос может сделать внешний вид невероятно привлекательным. Это отличный способ выразить индивидуальность. Хотя укладка волос зависит от их длины и текстуры, существует множество способов создать неповторимый образ.',
    articleList: [
      'Проконсультируйтесь со специалистом или найдите информацию в интернете, чтобы получить лучшее представление о том, какой стиль подходит именно вам',
      'Знание толщины, текстуры и скорости роста ваших волос может помочь вам определить, какие стили являются наиболее практичными для вас',
      'Не используйте слишком много средств для укладки',
      'Сделайте стрижку, которая облегчит укладку ваших волос или поможет вам избежать чрезмерных повреждений волос при укладке',
    ],
    link: '/style-article',
  },
  {
    id: '4',
    image: healthImage,
    title: 'Ежедневный уход за волосами',
    articleText:
      'Не всем нужно мыть голову каждый день. Не злоупотребляйте шампунем, иначе ваши волосы могут выглядеть сухими. Если ваши волосы сухие, тогда необходимо их мыть каждые 2-3 дня.',
    articleList: [
      'Мойте волосы каждый день, только если они жирные',
      'Используйте шампунь, который соответствует вашей текстуре, густоте и пористости волос',
      'При необходимости используйте кондиционер или мусс',
    ],
    category: 'Уход',
    link: '/daily-hair-care',
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
