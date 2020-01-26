import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";

const CartList = (props) => {

    return (    
        <div className="row" style={{marginBottom:"20px"}}>
            <div className="col-md-4 col-sm-4">
                <img src={props.productImage} alt="product" style={{width:"100%"}}></img>
            </div>
            <div className="col-md-8 col-sm-8">
                <h3 style={{fontWeight:"bolder"}}>{props.productName}</h3>
                <p style={{padding:"5px", margin:"0"}}>Rp.{props.productPrice}</p>
                <p style={{padding:"5px", margin:"0"}}>Quantity: {props.productQuantity}</p>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(CartList));