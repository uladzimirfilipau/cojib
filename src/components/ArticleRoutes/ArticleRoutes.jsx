import { Route } from 'react-router-dom';
import { articlesList } from '../../utils/consts';
import BlogArticle from '../BlogArticle/BlogArticle';

export const ArticleRoutes = articlesList.map((i) => (
  <Route key={i.id} exact path={i.link}>
    <BlogArticle i={i} />
  </Route>
));
