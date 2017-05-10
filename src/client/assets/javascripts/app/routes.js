import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import SharedModelView from 'features/sharedmodel/components/SharedModelView';
import NotFoundView from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SharedModelView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
