import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  // <header>
  //   <Link to="/">Home</Link>

  //   <nav>
  //     <Link to="/helloworld">Hello World</Link>
  //   </nav>

  //   <hr />
  // </header>
    <div>
        <header className="bgcolor-white">
            <div id="logo">
                <a href="" className="color-pink">UKAY</a>
            </div>

            <img src={require('../../../public/assets/img/profilepic.jpeg')} alt="Profile Picture"/>

            <nav>
                <ul>
                    <li><a href="">Sell a product</a></li>
                    <li><NavLink to="/about" exact activeStyle={{color: '#F54EA2'}}>About Ukay</NavLink></li>
                    <li><NavLink to="/" exact activeStyle={{color: '#F54EA2'}}>Explore</NavLink></li>
                    <li><a href="">Wish List</a></li>
                    <li><a href="inbox.html">Inbox</a></li>
                </ul>
            </nav>
        </header>
    </div>
);

export default Header;
