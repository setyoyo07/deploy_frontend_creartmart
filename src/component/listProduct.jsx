import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class ListProduct extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.name}</td>
                <td>{this.props.shopID}</td>
                <td>{this.props.price}</td>
                <td>{this.props.category}</td>
                <td>{this.props.limited}</td>
                <td>{this.props.sold}</td>
                <td>{this.props.stock}</td>
                <td>{this.props.promo}</td>
                <td>{this.props.discount}</td>
                <td>{this.props.weight}</td>
                <td>{this.props.status}</td>
                <td>
                    <Link to="/editproduct">Edit</Link>
                </td>
            </tr>
            
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(ListProduct));