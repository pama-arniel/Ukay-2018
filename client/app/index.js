import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Sell from './components/Sell/Sell';
import About from './components/About/About';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sell" component={Sell}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
