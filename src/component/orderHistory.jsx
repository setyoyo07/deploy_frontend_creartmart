import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class OrderHistory extends React.Component {
    
    render() {

        return (
            <div style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Transaction ID</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: {this.props.transactionID}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Shop</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: {this.props.shopName}</h5>
                    </div>
                </div>
                {this.props.listReviewProduct}
                <div className="row">
                    <div className="col-md-6">
                        <h5>Total Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalPrice}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Payment Status</h5>
                    </div>
                    {(this.props.paymentStatus === "NOT VERIFIED")
                    ? <div className="row justify-content-center" style={{color:"red"}}>
                        <i class="fa fa-times-circle mr-1"></i>
                        <h5>{this.props.paymentStatus}</h5>
                    </div>
                    : <div className="row justify-content-center" style={{color:"green"}}>
                        <i class="fa fa-check-circle mr-1" style={{color:"green"}}></i>
                        <h5>{this.props.paymentStatus}</h5>
                    </div>
                    }
                </div>
                <div className="row">
                    <Link to="">Get Detail</Link>
                </div>
            </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(OrderHistory));