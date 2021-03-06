import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListProduct = (props) => {

    return (
        <div className="col-md-3 col-sm-12">
            <div className="productImage">
                <Link to={`/product/detail/${props.productId}`}><img src={props.productImage} alt="product" style={{width:"100%", height:"250px"}}/></Link>
            </div>
            <p className='productName' style={{fontWeight:"bolder"}}>
                <Link to={`/product/detail/${props.productId}`}>{props.productName}</Link>
            </p>
            <p className='productShop' style={{color:'grey'}}>
                <Link to={`/shop/info/${props.shopId}`}>{props.shopName}</Link></p>
            <p className="productPrice" style={{color:'blue'}}>Rp {props.productPrice}</p>
            <p className="productStock" style={{color:'blue'}}>Available : {props.productStock} left</p>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListProduct));