import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const CartComponent = (props) => {

    return (
        <div className="row" style={{marginBottom:"30px"}}>
            <div className="col-md-7 col-sm-12" style={{backgroundColor:"#F2F4F6", padding:"30px"}}>
                <h4>From {props.shopName}</h4>
                {props.listCart}
            </div>
            <div className="col-md-5 col-sm-12" style={{backgroundColor:"#9BA5B8", padding:"30px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Total Item</h4>
                    </div>
                    <div className="col-md-6">
                        <h4>= {props.totalItem}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Total Item Price</h4>
                    </div>
                    <div className="col-md-6">
                        <h4>= Rp. {props.totalItemPrice}</h4>
                    </div>
                </div>
                <div className="checkoutButton" style={{marginTop:"20px"}}>
                    <Link to={`/users/checkout/${props.cartId}`}>
                        <button type="button" className="btn btn-danger">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(CartComponent));