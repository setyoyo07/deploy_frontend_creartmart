import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListSellerHistory extends React.Component {
    
    render() {

        return (
            <div class="container" style={{padding:"10px", margin:"10px", backgroundColor:"white"}}>
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
                        <h5>Customer</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: {this.props.customerName}</h5>
                    </div>
                </div>
                {this.props.listReviewProduct}
                <div className="row">
                    <div className="col-md-6">
                        <h5>Total Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>: Rp.{this.props.totalPrice}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Payment Status</h5>
                    </div>
                    <div className="col-md-6">
                        {(this.props.paymentStatus === "NOT VERIFIED")
                            ? <h5 style={{color:"red"}}>{this.props.paymentStatus}</h5>
                            : <h5 style={{color:"green"}}>{this.props.paymentStatus}</h5>
                        }
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Link to={`/users/shop/sellerHistory/${this.props.transactionID}`}>Get Detail</Link>
                </div>
            </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListSellerHistory));