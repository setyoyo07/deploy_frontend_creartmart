import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListShops extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.userID}</td>
                <td>{this.props.contact}</td>
                <td>{this.props.cityType}</td>
                <td>{this.props.cityName}</td>
                <td>{this.props.status}</td>
            </tr>
            
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListShops));