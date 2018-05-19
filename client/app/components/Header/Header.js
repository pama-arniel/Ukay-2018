import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  // <header>
  //   <Link to="/">Home</Link>

  //   <nav>
  //     <Link to="/helloworld">Hello World</Link>
  //   </nav>

  //   <hr />
  // </header>
    <div>
        <header class="bgcolor-white">
            <div id="logo">
                <a href="" class="color-pink">UKAY</a>
            </div>
            <div id="profile-pic">
                <img src="./img/adult-attractive-beautiful.jpg" alt="Profile Picture"/>
            </div>
            <nav>
                <ul>
                    <li><a href="" class="color-pink">Sell a product</a></li>
                    <li><a href="">Explore</a></li>
                    <li><a href="">Wish List</a></li>
                    <li><a href="inbox.html">Inbox</a></li>
                </ul>
            </nav>
        </header>
    </div>
);

export default Header;
