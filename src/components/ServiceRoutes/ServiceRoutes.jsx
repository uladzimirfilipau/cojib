import { Route } from 'react-router-dom';
import { serviceList } from '../../utils/consts';
import ServicesArticle from '../ServicesArticle/ServicesArticle';

export const ServiceRoutes = serviceList.map((i) => (
  <Route key={i.id} exact path={i.link}>
    <ServicesArticle i={i} />
  </Route>
));
