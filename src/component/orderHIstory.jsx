import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";
import ReviewProduct from './reviewProduct';

class OrderHistory extends React.Component {
    
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Transaction ID</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: {this.props.transactionID}</h5>
                    </div>
                </div>
                {this.props.listReviewProduct}
                <div className="row">
                    <div className="col-md-6">
                        <h5>Shipping Address</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: {this.props.shippingAddressData}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>ITEM(S) PRICE</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalItemPrice}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>SHIPPING COST</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.shippingCost}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>TOTAL PRICE</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalPrice}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "shippingAddressData",
    action
  )(withRouter(OrderHistory));