import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListSellerHistory = (props) => {
    
    return (
        <div class="container" style={{padding:"10px", margin:"10px", backgroundColor:"white"}}>
            <div className="row">
                <div className="col-md-6">
                    <h5>Transaction ID</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {props.transactionID}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>Customer</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {props.customerName}</h5>
                </div>
            </div>
            {props.listReviewProduct}
            <div className="row">
                <div className="col-md-6">
                    <h5>Total Price</h5>
                </div>
                <div className="col-md-6">
                    <h5>: Rp.{props.totalPrice}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5>Payment Status</h5>
                </div>
                <div className="col-md-6">
                    {(props.paymentStatus === "NOT VERIFIED")
                        ? <h5 style={{color:"red"}}>{props.paymentStatus}</h5>
                        : <h5 style={{color:"green"}}>{props.paymentStatus}</h5>
                    }
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to={`/users/shop/sellerHistory/${props.transactionID}`}>Get Detail</Link>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListSellerHistory));