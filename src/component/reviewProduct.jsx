import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ReviewProduct = (props) => {
    
    return (
        <div>
            <h5 style={{fontStyle:"italic"}}>Products :</h5>
            <div className="row">
                <div className="col-md-6">
                    <i class="fa fa-cart-plus mr-1"></i>
                    <h5 style={{display:"inline"}}>{props.productName}</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {props.productQuantity} item</h5>
                </div>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(ReviewProduct));