import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const ListShops = (props) => {

    return (
        <tr>
            <td>{props.ID}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.userID}</td>
            <td>{props.contact}</td>
            <td>{props.cityType}</td>
            <td>{props.cityName}</td>
            <td>{props.status}</td>
        </tr>
            
        );
    }

export default connect(
    "",
    action
  )(withRouter(ListShops));