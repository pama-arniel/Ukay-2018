import React, { Component } from 'react';
import 'whatwg-fetch';

import { Redirect } from 'react-router-dom';

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
          userId: '',
          name: '',
          category: '',
          province: '',
          city: '',
          price: '',
          description: '',
          sellError: ''
        };

        this.onTextboxChangeName = this.onTextboxChangeName.bind(this);
        this.onTextboxChangeCategory = this.onTextboxChangeCategory.bind(this);
        this.onTextboxChangeProvince = this.onTextboxChangeProvince.bind(this);
        this.onTextboxChangeCity = this.onTextboxChangeCity.bind(this);
        this.onTextboxChangePrice = this.onTextboxChangePrice.bind(this);
        this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(this);

        this.onSell = this.onSell.bind(this);
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
                userId: json.userId,
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

    onTextboxChangeName(event) {
      this.setState({
        name: event.target.value,
      });
    }

    onTextboxChangeCategory(event) {
      this.setState({
        category: event.target.value,
      });
    }

    onTextboxChangeProvince(event) {
      this.setState({
        province: event.target.value,
      });
    }

    onTextboxChangeCity(event) {
      this.setState({
        city: event.target.value,
      });
    }

    onTextboxChangePrice(event) {
      this.setState({
        price: event.target.value,
      });
    }

    onTextboxChangeDescription(event) {
      this.setState({
        description: event.target.value,
      });
    }

    onSell() {
      // Grab state
      const {
        userId,
        name,
        category,
        province,
        city,
        price,
        description
      } = this.state;

      // Post request to backend
      fetch('/api/product/sellproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          name: name,
          category: category,
          province: province,
          city: city,
          price: price,
          description: description
        })
      }).then(res => res.json())
        .then(json => {
          console.log(json.message);
          if (json.success) {
            this.setState({
              sellError: json.message,
              name: '',
              category: '',
              province: '',
              city: '',
              price: '',
              description: '',
            });
          } else {
            this.setState({
              sellError: json.message,
            });
          }
        });
    }

    render() {
        const {
          isLoading,
          token,
          name,
          category,
          province,
          city,
          price,
          description,
          sellError
        } = this.state;

        console.log(token);

        if (isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (
                <Redirect to={"/signin/sell"}/>
            );
        }

        return (
            <div>
            {
              (sellError) ? (
                <p>{sellError}</p>
              ) : (null)
            }
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
                        <input
                          className="mdl-textfield__input circular_font"
                          type="text"
                          placeholder="Name of your clothing"
                          id="title"
                          value={name}
                          onChange={this.onTextboxChangeName}
                        />
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input
                          className="mdl-textfield__input circular_font"
                          type="text"
                          placeholder="Category"
                          id="type"
                          value={category}
                          onChange={this.onTextboxChangeCategory}
                        />
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input
                          className="mdl-textfield__input circular_font"
                          type="text"
                          placeholder="Province"
                          id="prov"
                          value={province}
                          onChange={this.onTextboxChangeProvince}
                        />
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input
                          className="mdl-textfield__input circular_font"
                          type="text"
                          placeholder="City"
                          id="bar"
                          value={city}
                          onChange={this.onTextboxChangeCity}
                        />
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input
                          className="mdl-textfield__input circular_font"
                          type="number"
                          placeholder="Price"
                          id="price"
                          value={price}
                          onChange={this.onTextboxChangePrice}
                        />
                      </div>
                      <br/>
                      <div className="mdl-textfield mdl-js-textfield">
                        <textarea
                          className="mdl-textfield__input circular_font"
                          type="text"
                          placeholder="Description"
                          rows="3"
                          id="description"
                          value={description}
                          onChange={this.onTextboxChangeDescription}
                        />
                      </div>
                      <br/><br/>
                      <input
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        type="submit"
                        value="Submit"
                        onClick={this.onSell}
                      />
                    </form>
                  </div>
              </main>
            </div>
        );
    }
}

export default Sell;
