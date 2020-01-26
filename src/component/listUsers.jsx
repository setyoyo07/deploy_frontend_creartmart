import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListUsers extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                <td>{this.props.contact}</td>
                <td>{this.props.address}</td>
                <td>{this.props.accountNumber}</td>
                <td>{this.props.status}</td>
                <td>
                    <Link to="/admin">Edit Status</Link>
                </td>
            </tr>
            
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListUsers));