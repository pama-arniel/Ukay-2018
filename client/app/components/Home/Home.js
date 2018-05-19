import React, { Component } from 'react';
import 'whatwg-fetch';

import Trending from './Trending';
import Recommended from './Recommended';
import Latest from './Latest';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main className="main">
          <Trending/>
          <Recommended/>
          <Latest/>
        </main>
      </div>
    );
  }
}

export default Home;
