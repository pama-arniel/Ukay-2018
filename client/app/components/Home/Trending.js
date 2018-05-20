import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

const ProdListItemList = (props) => (
  <div className="prodlist">
    <h2 className="circular_black_font prodlist_header_text">Today's Trending Items</h2>
    <div className="pridlist_itemlist nowrap_scroll" id="style-2">
      {props.prodlist}
    </div>
  </div>
);

const ProdListItem = (props) => (
  <div className="prodlist_item">
    <div className="center-cropped">
      <img src={require("../../../public/assets/img/cardigan-clothes-sweater.jpg")} className="prodlist_item_thumbnail" onClick={() => props.onClickProduct(props.id)}/>
    </div>
    <div className="prodlist_label_details">
      <p className="prodlist_label_details_itemtype circular_font color-cyandark">{props.category}</p>
      <p className="prodlist_label_details_title circular_font">{props.name}</p>
      <div className="prodlist_label_details_location"> <i className="material-icons">place</i> <p className="circular_font">{props.province}, {props.city}</p>  </div>
      <p className="prodlist_label_details_price color-pink akkurat-bold-font larger-font"> PHP {props.price} </p>
    </div>
  </div>
)

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
          redirectToProduct: false,
          redirectToProductId: '',
        };

    this.onClickProduct = this.onClickProduct.bind(this);
  }

    onClickProduct(id) {
      this.setState({
          redirectToProduct: true,
          redirectToProductId: id
      });
    }

  render() {

    const {
        redirectToProduct,
    } = this.state;

    if (redirectToProduct) {
        return (
            <Redirect to={"/product/" + this.state.redirectToProductId}/>
        );
    }

    let prodlist = [];
    let trending = this.props.trending;
    for (let i = 0; i < trending.length; i++) {
      prodlist.push(<ProdListItem
                      key={i}
                      id={trending[i]._id}
                      name={trending[i].name}
                      category={trending[i].category}
                      province={trending[i].province}
                      city={trending[i].city}
                      price={trending[i].price}
                      onClickProduct={this.onClickProduct}
                    />);
    }
    return (
      <ProdListItemList prodlist={prodlist}/>
    );
  }
}

export default Trending;


