import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',

    }
  }

  render() {
    return (
      <div>
          <header className="bgcolor-white">
              <div id="logo">
                  <a href="" className="color-pink">UKAY</a>
              </div>

              <img src={require('../../../public/assets/img/default-profile-pic.jpg')} alt="Profile Picture"/>

              <nav>
                  <ul>
                      <li><NavLink to="/sell" exact activeStyle={{color: '#F54EA2'}}>Sell a product</NavLink></li>
                      <li><NavLink to="/about" exact activeStyle={{color: '#F54EA2'}}>About Ukay</NavLink></li>
                      <li><NavLink to="/" exact activeStyle={{color: '#F54EA2'}}>Explore</NavLink></li>
                      <li><a href="">Wish List</a></li>
                      <li><a href="inbox.html">Inbox</a></li>
                  </ul>
              </nav>
          </header>
      </div>
    );
  }
}


export default Header;
