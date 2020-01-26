import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const PaymentDetail = (props) => {

    return (
        <div>
            <div className="row">
                <h2>Payment Code</h2>
            </div>
            <div className="row">
                <h5>Payment Method :</h5>
                <h5>{props.paymentMethod}</h5>
                <h5>{props.paymentAccountName}</h5>
            </div>
            <div className="row justify-content-center">
                <h5>Account Number: {props.paymentAccountNumber}</h5>
            </div>
            <div className="row">
                <h5>Payment Code</h5>
            </div>
            <div className="row justify-content-center">
                <h5 style={{fontWeight:"bolder"}}>1234567890232524</h5>
            </div>
            <div className="row">
                <h5>Payment Status</h5>
            </div>
            {(props.paymentStatus === "NOT VERIFIED")
                ? <div className="row justify-content-center" style={{color:"red"}}>
                    <i class="fa fa-times-circle mr-1"></i>
                    <h5>{props.paymentStatus}</h5>
                </div>
                : <div className="row justify-content-center" style={{color:"green"}}>
                    <i class="fa fa-check-circle mr-1" style={{color:"green"}}></i><h5>{props.paymentStatus}</h5>
                </div>
            }
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(PaymentDetail));