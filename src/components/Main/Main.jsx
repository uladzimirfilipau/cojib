import { Route, Routes } from 'react-router-dom';
import './Main.css';

import Home from '../Home/Home';
// import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Contacts from '../Contacts/Contacts';
import PageNotFound from '../PageNotFound/PageNotFound';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import Service from '../Service/Service';

export default function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/blog' component={Blog} /> */}
        {/* {ArticleRoutes} */}

        <Route path='services'>
          <Route index element={<Services />} />
          <Route path=':serviceId' element={<Service />} />
        </Route>

        <Route path='contacts' element={<Contacts />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ScrollUpButton />
    </main>
  );
}
