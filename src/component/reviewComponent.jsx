import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ReviewComponent = (props) => {
    
    return (
        <div>
            <div className="row">
                <h2>Review Transaction</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>Transaction ID</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {props.transactionID}</h5>
                </div>
            </div>
            {props.listReviewProduct}
            <div className="row">
                <div className="col-md-6">
                    <h5>Shipping Address</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {props.shippingAddressData}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>ITEM(S) PRICE</h5>
                </div>
                <div className="col-md-6">
                    <h5>= Rp.{props.totalItemPrice}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>SHIPPING COST</h5>
                </div>
                <div className="col-md-6">
                    <h5>= Rp.{props.shippingCost}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>TOTAL PRICE</h5>
                </div>
                <div className="col-md-6">
                    <h5>= Rp.{props.totalPrice}</h5>
                </div>
            </div>
        </div>
        );
    }

export default connect(
    "shippingAddressData",
    action
  )(withRouter(ReviewComponent));