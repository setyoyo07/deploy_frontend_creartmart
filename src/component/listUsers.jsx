import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListUsers = (props) => {

    return (
        <tr>
            <td>{props.ID}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.contact}</td>
            <td>{props.address}</td>
            <td>{props.accountNumber}</td>
            <td>{props.status}</td>
            <td>
                <Link to="/admin">Edit Status</Link>
            </td>
        </tr>
            
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListUsers));