import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class CheckoutPayment extends React.Component {
    handlePostPayment = async () => {
        await this.props.postPayment();
        this.props.history.replace(`/users/transaction/${this.props.cartId}`);
    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Items Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalItemPrice}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Shipping Cost</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.shippingCost}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Total Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalPrice}</h5>
                    </div>
                </div>
                <div className="row" style={{marginTop:"20px",fontWeight:"bolder"}}>
                    <h4>Payment Method</h4>
                </div>
                <div class="form-group">
                    <label for="sel2">Payment Method :</label>
                    <select class="form-control" id="sel2" name="paymentMethod" onChange={e => this.props.handleInput(e)}>
                        <option value="1">BCA (Bank Transfer)</option>
                        <option value="2">Mandiri (Bank Transfer)</option>
                    </select>
                </div>
                <div className="checkoutButton" style={{marginTop:"20px"}}>
                    <button type="button" onClick={() => this.handlePostPayment()} className="btn btn-danger">GET PAYMENT CODE</button>
                </div>
            </div>
        );
    }
}
export default connect(
    "isLogin, token",
    action
  )(withRouter(CheckoutPayment));