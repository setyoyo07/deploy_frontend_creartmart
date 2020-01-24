import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ProductImage extends React.Component {

    render() {
        return (
            <div>
                <div className="imageProductDetail">
                    <img src={this.props.productImage} alt="product" style={{width:"100%"}}/>
                </div>
                <div style={{padding:"20px"}}>
                    <h5>Wanna know more product from this shop?</h5>
                    <Link to={`/shop/info/${this.props.shopId}`}>
                        <button type="button" className="btn btn-primary" style={{width:"100px"}}>Visit Shop</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ProductImage));