import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ReviewProduct extends React.Component {
    
    render() {

        return (
            <div className="row">
                <div className="col-md-6">
                    <h5>{this.props.productName}</h5>
                </div>
                <div className="col-md-6">
                    <h5>: {this.props.productQuantity}</h5>
                </div>
            </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ReviewProduct));