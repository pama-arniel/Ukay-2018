import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
const queryString = require('queryString');

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

const Product = (props) => (
    <div className="post">
        <img className="post-picture"/>
        <div className="post-desc">
            <span className="category">{props.category}</span>&nbsp;
            <span className="post-title">{props.name}</span>
            <span className="location">{props.province}, {props.city}</span>
            <span className="cost">PHP {props.price}</span>
        </div>
    </div>
);

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
          description: 'Tell us more about you',
          productsToSell: []
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
              console.log(json.message);
              this.setState({
                token,
                isLoading: false
              });
              // Get user profile details
              console.log(json.userId);
              fetch('/api/user/profile?userId=' + json.userId)
              .then(res => res.json())
              .then(json => {
                console.log(json.message);
                if (json.success) {
                  this.setState({
                    firstName: json.firstName,
                    lastName: json.lastName,
                    email: json.email,
                    location: json.location,
                  });
                  console.log(json.productsToSell);
                  fetch('/api/product/details?productsId=' + json.productsToSell)
                  .then(res => res.json())
                  .then(json => {
                    console.log(json.message);
                    if (json.success) {
                      console.log(json.productsToSell);
                      this.setState({
                        productsToSell: json.productsToSell
                      });
                    }
                  });
                }
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
            location,
            description,
            productsToSell
        } = this.state;

        if (isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (
                <Redirect to={"/signin/profile"}/>
            );
        }

        let products = [];
        for (let i = 0; i < productsToSell.length; i++) {
          products.push(<Product
                          key={i}
                          name={productsToSell[i].name}
                          category={productsToSell[i].category}
                          province={productsToSell[i].province}
                          city={productsToSell[i].city}
                          price={productsToSell[i].price}
                        />)
        }

        return (
            <div id="wrapper">
                <div className="profile">
                    <img id="picture"/>
                    <div className="details">
                        <span className="name">{firstName} {lastName}</span>
                        <span className="email">{email}</span>
                        <span className="bio">{description}</span>
                        <span className="location">{location}</span>
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
                    {products}
                </div>
            </div>
        );
    }
}

export default Profile;
