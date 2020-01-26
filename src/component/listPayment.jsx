import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListPayment = (props) => {

    return (
        <tr>
            <td>{props.ID}</td>
            <td>{props.paymentMethod}</td>
            <td>{props.accountName}</td>
            <td>{props.accountNumber}</td>
            <td>{props.status}</td>
            <td>
                <Link to="/admin">Edit</Link>
            </td>
        </tr>            
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListPayment));