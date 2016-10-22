import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Page2, Page1, Root } from './components';

import { Provider } from 'react-redux';
import { store, history } from './store';
import ReduxHome from './ReduxHome';

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ReduxHome}>
        <IndexRoute component={Root} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
