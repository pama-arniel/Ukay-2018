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

        console.log(token);

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
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><h1>logged-in</h1>
            </div>
        );
    }
}

export default Sell;
