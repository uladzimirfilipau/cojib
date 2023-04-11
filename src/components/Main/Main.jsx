import { Switch, Route } from 'react-router-dom';
import './Main.css';

import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

import { ServiceRoutes } from '../ServiceRoutes/ServiceRoutes';
import { ArticleRoutes } from '../ArticleRoutes/ArticleRoutes';

export default function Main() {
  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        {ArticleRoutes}
        <Route path='/services' component={Services} />
        {ServiceRoutes}
        <Route path='/contacts' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <ScrollUpButton />
    </main>
  );
}
