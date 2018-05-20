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
import Signin from './components/Signin/Signin';
import Sell from './components/Sell/Sell';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Inbox from './components/Inbox/Inbox';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin/:to" component={Signin}/>
        <Route path="/sell" component={Sell}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/inbox" component={Inbox}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
