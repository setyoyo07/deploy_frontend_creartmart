import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListProduct extends React.Component {

    render() {
        return (
            <div className="col-md-3 col-sm-12">
                <div className="productImage">
                    <Link to={`/product/detail/${this.props.productId}`}><img src={this.props.productImage} alt="product" style={{width:"100%", height:"250px"}}/></Link>
                </div>
                <p className='productName' style={{fontWeight:"bolder"}}>
                    <Link to={`/product/detail/${this.props.productId}`}>{this.props.productName}</Link>
                </p>
                <p className='productShop' style={{color:'grey'}}>
                    <Link to={`/shop/info/${this.props.shopId}`}>{this.props.shopName}</Link></p>
                <p className="productPrice" style={{color:'blue'}}>Rp {this.props.productPrice}</p>
                <p className="productStock" style={{color:'blue'}}>Available : {this.props.productStock} left</p>
            </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListProduct));