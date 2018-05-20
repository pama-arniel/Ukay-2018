import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isLoading: true,
          token: '',
          firstName: '',
          lastName: '',
          email: '',
          location: '',
        };
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify the token
          fetch('/api/account/verify?token=' + token)
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              this.setState({
                token,
                isLoading: false
              });
            } else {
              this.setState({
                isLoading: false
              })
            }
          });
        } else {
          this.setState({
            isLoading: false,
          });
        }
    }

    render() {
        const {
            isLoading,
            token,
            firstName,
            lastName,
            email,
            location
        } = this.state;

        if (isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (
                <Redirect to={"/signin/profile"}/>
            );
        }

        return (
            <div id="wrapper">
                <div className="profile">
                    <img id="picture"/>
                    <div className="details">
                        <span className="name">Margaret dela Croix</span>
                        <span className="email">mjdelacroix@gmail.com</span>
                        <span className="bio">chic diva | aesthetic queen | needs my daily sip of tea</span>
                        <span className="location">Manila City, NCR</span>
                    </div>
                </div>
                <div className="two-links">
                    <div className="link-heading">
                        <a href="#home">UPLOAD</a>
                        <a href="#home">FOLLOWING</a>
                    </div>
                    <div className="link-details">
                        <span className="number" id="num1">32</span>
                        <span className="number">881</span>
                    </div>
                </div>
                <div className="timeline">
                    <div className="post">
                        <img className="post-picture"/>
                        <div className="post-desc">
                            <span className="category">MEN'S SHIRTS</span>&nbsp;&#8226;
                            <span className="type">CASUAL</span>
                            <span className="post-title">This is a header that a seller might type</span>
                            <span className="location">Cebu City, Cebu</span>
                            <span className="cost">PHP 1,4900.00</span>
                        </div>
                    </div>
                    <div className="post">
                        <img className="post-picture"/>
                        <div className="post-desc">
                            <span className="category">MEN'S SHIRTS</span>&nbsp;&#8226;
                            <span className="type">CASUAL</span>
                            <span className="post-title">This is a header that a seller might type</span>
                            <span className="location">Cebu City, Cebu</span>
                            <span className="cost">PHP 1,4900.00</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
