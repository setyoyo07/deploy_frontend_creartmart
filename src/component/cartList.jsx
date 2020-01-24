import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";

class CartList extends React.Component {

    render() {

        return (    
            <div className="row" style={{marginBottom:"20px"}}>
                <div className="col-md-4 col-sm-4">
                    <img src={this.props.productImage} alt="product image" style={{width:"100%"}}></img>
                </div>
                <div className="col-md-8 col-sm-8">
                    <h3 style={{fontWeight:"bolder"}}>{this.props.productName}</h3>
                    <p style={{padding:"5px", margin:"0"}}>Rp.{this.props.productPrice}</p>
                    <p style={{padding:"5px", margin:"0"}}>Quantity: {this.props.productQuantity}</p>
                    {/* <button type="button" onClick={this.props.handleDeleteCart(this.props.transactionId)} className="btn btn-danger" >Delete Cart</button> */}
                </div>
            </div>
        );
    }
}
export default connect(
    "isLogin, token",
    action
  )(withRouter(CartList));