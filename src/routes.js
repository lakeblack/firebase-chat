import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home}/>
    </Route>
  </Router>
)

export default routes;
