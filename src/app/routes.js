import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';

import TodoApp from './todos/components/TodoApp/';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={TodoApp}>

    </Route>
  </Router>
);
