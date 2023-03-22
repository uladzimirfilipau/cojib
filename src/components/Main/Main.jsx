import { Switch, Route } from 'react-router-dom';
import './Main.css';

import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Article from '../Article/Article';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import { servicelinks } from '../../utils/consts';

function Main() {
  const serviceRoutes = servicelinks.map((i) => (
    <Route key={i.id} exact path={i.link}>
      <Article i={i} />
    </Route>
  ));

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/services' component={Services} />
        {serviceRoutes}
        <Route path='/contacts' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <ScrollUpButton />
    </main>
  );
}

export default Main;
