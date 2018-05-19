import React, { Component } from 'react';

const ProdListItemList = () => (
  <div className="prodlist">
    <h2 className="circular_black_font prodlist_header_text">Today's Trending Items</h2>
    <div className="pridlist_itemlist nowrap_scroll" id="style-2">
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
      <ProdListItem/>
    </div>
  </div>
);

const ProdListItem = () => (
  <div className="prodlist_item">
    <div className="center-cropped">
      <img src={require("../../../public/assets/img/items2.jpg")} className="prodlist_item_thumbnail"/>
    </div>
    <div className="prodlist_label_details">
      <p className="prodlist_label_details_itemtype circular_font color-cyandark"> MEN'S SWEATERS & JACKETS  </p>
      <p className="prodlist_label_details_title circular_font"> Original Sweater bihhhhhhh </p>
      <div className="prodlist_label_details_location"> <i className="material-icons">place</i> <p className="circular_font">Manila City, NCR</p>  </div>
      <p className="prodlist_label_details_price color-pink akkurat-bold-font larger-font"> PHP 1,400  </p>
    </div>
  </div>
)

class Trending extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProdListItemList/>
    );
  }
}

export default Trending;


