import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListPayment extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.paymentMethod}</td>
                <td>{this.props.accountName}</td>
                <td>{this.props.accountNumber}</td>
                <td>{this.props.status}</td>
                <td>
                    <Link to="/admin">Edit</Link>
                </td>
            </tr>
            
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListPayment));