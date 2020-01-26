import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListProduct = (props) => {

    return (
        <tr>
            <td>{props.ID}</td>
            <td>{props.name}</td>
            <td>{props.shopID}</td>
            <td>{props.price}</td>
            <td>{props.category}</td>
            <td>{props.limited}</td>
            <td>{props.sold}</td>
            <td>{props.stock}</td>
            <td>{props.promo}</td>
            <td>{props.discount}</td>
            <td>{props.weight}</td>
            <td>{props.status}</td>
            <td>
                <Link to="/editproduct">Edit</Link>
            </td>
        </tr>            
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListProduct));