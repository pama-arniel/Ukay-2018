import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isLoading: true,
          id: this.props.match.params.id,
          name: '',
          category: '',
          province: '',
          city: '',
          price: '',
          description: '',
          comments: []
        };
    }

    componentDidMount() {
      // Get product details
      fetch('/api/product/details?productsId=' + this.state.id)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          const product = json.products[0];
          this.setState({
            isLoading: false,
            name: product.name,
            category: product.category,
            province: product.province,
            city: product.city,
            price: product.price,
            description: product.description
          });
        } else {
          this.setState({
            isLoading: false
          })
        }
      });
      this.setState({
           isLoading: false
        });
    }

    render() {
        const {
          isLoading,
          name,
          category,
          province,
          city,
          price,
          description
        } = this.state;

        if (isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        return (
            <div>
                <section id="product-slideshow">
                    <div className="imgbox">
                        <img src={require("../../../public/assets/img/cardigan-clothes-sweater.jpg")} alt="Product Picture 1" className="center-fit"/>
                    </div>
                </section>

                <aside id="product-details">
                    <div className="container">
                        <h2 id="category" className="color-darkblue">{category}</h2>
                        <h1 id="product-name">{name}</h1>
                        <h3 id="product-location">{province},{city}</h3>
                        <h1 id="product-price">P {price}</h1>
                        <div id="product-description">
                            <p>{description}</p>
                        </div>
                        <div id="comment-section">
                            <h2 id="comment-label">Comments</h2>
                            <div className="comment">
                                <h3 className="commenter">Frederic Lemarque</h3>
                                <p className="comment-body">Sed ut psdfsdfderspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                            <div className="comment">
                                 <h3 className="commenter">Melisa Fumero</h3>
                                <p className="comment-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                            <div className="comment">
                                <h3 className="commenter">Frederic Lemarque</h3>
                                <p className="comment-body">Sed ut perspiciatis unde omnis ifsdfwefwefefsd ddsf sste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                            <div className="comment">
                                 <h3 className="commenter">Melisa Fumero</h3>
                                <p className="comment-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}

export default Product;
