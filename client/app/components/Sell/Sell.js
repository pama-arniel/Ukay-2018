import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class Sell extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isLoading: true,
          token: '',
          signUpError: '',
          signInError: '',
          signInEmail: '',
          signInPassword: '',
          signUpFirstName: '',
          signUpLastName: '',
          signUpEmail: '',
          signUpPassword: '',
          signUpLocation: '',
        };

        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpLocation = this.onTextboxChangeSignUpLocation.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
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

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onTextboxChangeSignUpLocation(event) {
    this.setState({
        signUpLocation: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpLocation
    } = this.state;

    this.setState({
      isLoading: true,

    })

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword,
        location: signUpLocation,
      })
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpLocation: '',
            token: json.token,
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

    render() {
        const {
          isLoading,
          token,
          signInError,
          signInEmail,
          signInPassword,
          signUpFirstName,
          signUpLastName,
          signUpEmail,
          signUpPassword,
          signUpError,
          signUpLocation,
        } = this.state;



        if (!token) {
            return (
                <div id="content3">
                    <div id="sign-up">
                        <h1>Join Ukay now</h1>
                        <form>
                            <h2>Fill in the form below</h2><br/>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={signUpFirstName}
                                onChange={this.onTextboxChangeSignUpFirstName}
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={signUpLastName}
                                onChange={this.onTextboxChangeSignUpLastName}
                            />
                            <br/>
                            <input
                                type="email"
                                placeholder="Email"
                                value={signUpEmail}
                                onChange={this.onTextboxChangeSignUpEmail}
                            />
                            <br/>
                            <input
                                type="password"
                                placeholder="Password"
                                value={signUpPassword}
                                onChange={this.onTextboxChangeSignUpPassword}
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Location"
                                value={signUpLocation}
                                onChange={this.onTextboxChangeSignUpLocation}
                            />
                            <br/>
                            <input
                                type="submit"
                                value="SIGN UP"
                                className="myButton"
                                onClick={this.onSignUp}
                            />
                        </form>
                    </div>
                </div>
            );
        }

        return (
            <div>
              <main className="main">
                  <div className="sell-wrapper">
                    <h1 className="circular_black_font">Sell your clothes</h1>
                    <h3 className="circular_font"> Add photos of your product </h3>
                    <div className="photo-list">
                      <div className="center-cropped photo-item" style={{backgroundColor: 'gray', display: 'inline-block'}}>
                        <img src={require("../../../public/assets/img/items.jpg")} className="prodlist_item_thumbnail"/>
                      </div>
                      <div className="center-cropped photo-item" style={{backgroundColor: '#BBBBBB', display: 'inline-block'}}>
                        <i className="material-icons" style={{margin: 'auto', fontSize: '100px', textAlign: 'center', alignContent: 'center', width: '100%', lineHeight: '200px'}}>camera_alt</i>
                      </div>
                    </div>

                    <form action="#">
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input circular_font" type="text" id="title"/>
                        <label className="mdl-textfield__label circular_font" htmlFor="title">Name of your clothing</label>
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input circular_font" type="text" id="type"/>
                        <label className="mdl-textfield__label circular_font" htmlFor="type">Category</label>
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input circular_font" type="text" id="prov"/>
                        <label className="mdl-textfield__label circular_font" htmlFor="prov">Province</label>
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input circular_font" type="text" id="bar"/>
                        <label className="mdl-textfield__label circular_font" htmlFor="bar">City</label>
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input circular_font" type="number" id="price"/>
                        <label className="mdl-textfield__label circular_font" htmlFor="price">Price</label>
                      </div>
                      <br/><br/>
                      <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" value="Submit"/>
                    </form>
                  </div>
              </main>
            </div>
        );
    }
}

export default Sell;
