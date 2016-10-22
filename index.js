import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Home, Page2, Page1 } from './components';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="page1" component={Page1} />
    <Route path="page2/:user" component={Page2} />
    <Route path="*" component={Home} />
  </Router>
), document.getElementById('app'));
