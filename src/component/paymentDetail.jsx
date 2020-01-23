import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class PaymentDetail extends React.Component {

    render() {

        return (
            <div>
                <div className="row">
                    <h2>Payment Code</h2>
                </div>
                <div className="row">
                    <h5>Payment Method :</h5>
                    <h5>{this.props.paymentMethod}</h5>
                    <h5>{this.props.paymentAccountName}</h5>
                </div>
                <div className="row justify-content-center">
                    <h5>Account Number: {this.props.paymentAccountNumber}</h5>
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
                {(this.props.paymentStatus === "NOT VERIFIED")
                    ? <div className="row justify-content-center" style={{color:"red"}}>
                        <i class="fa fa-times-circle mr-1"></i>
                        <h5>{this.props.paymentStatus}</h5>
                    </div>
                    : <div className="row justify-content-center" style={{color:"green"}}>
                        <i class="fa fa-check-circle mr-1" style={{color:"green"}}></i><h5>{this.props.paymentStatus}</h5>
                    </div>
                }
            </div>
        );
    }
}
export default connect(
    "isLogin, token",
    action
  )(withRouter(PaymentDetail));