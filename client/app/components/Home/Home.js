import React, { Component } from 'react';
import 'whatwg-fetch';

import Trending from './Trending';
import Recommended from './Recommended';
import Latest from './Latest';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
          isLoading: true,
          trending: [],
          recommended: [],
          latest: [],
        };
  }

  componentDidMount() {
      // Get product details
      fetch('/api/product/trending')
      .then(res => res.json())
      .then(json => {
        console.log(json.message);
        if (json.success) {
          console.log(json.trending);
          this.setState({
            isLoading: false,
            trending: json.trending,
          });
        } else {
          this.setState({
            isLoading: false
          })
        }
        fetch('/api/product/recommended')
        .then(res => res.json())
        .then(json => {
          console.log(json.message);
          if (json.success) {
            console.log(json.recommended);
            this.setState({
              recommended: json.recommended,
            });
          }
          fetch('/api/product/latest')
          .then(res => res.json())
          .then(json => {
            console.log(json.message);
            if (json.success) {
              console.log(json.latest);
              this.setState({
                latest: json.latest,
              });
            }
          });
        });
      });
      this.setState({
           isLoading: false
        });
    }

  render() {
    const {
      isLoading,
      trending,
      recommended,
      latest
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    return (
      <div>
        <main className="main">
          <Trending trending={trending}/>
          <Recommended recommended={recommended}/>
          <Latest latest={latest}/>
        </main>
      </div>
    );
  }
}

export default Home;
