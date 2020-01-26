import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action } from "../store";

import {Navbar, Nav} from 'react-bootstrap'

class HeaderAdmin extends React.Component {

    handleLogout = async () => {
        await this.props.handleLogoutState();
        await store.setState({token: localStorage.getItem("token")})
        console.warn("cek token login", this.props.token)
        this.props.history.push("/");
        alert("Thanks for your hard work, See you next time !")
    };
 
    handleRouter = async category => {
        await store.setState({category: category})
        await this.props.history.push("/admin/"+category);
    };

    render() {

        return (
        <div className="container-fluid" style={{padding:"0"}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Navbar style={{backgroundColor: '#d9e7ff'}} expand="lg">
                <div className="col-md-2 col-sm-12" style={{textAlign:"center"}}>
                    <Link to="/admin"><img src={require("../image/logoCreArt.png")} style={{width:"120px"}} alt="logo"></img></Link>
                </div>
                <div className="col-md-3 col-sm-12" style={{textAlign:"center"}}>
                    <h4>ADMIN DASHBOARD</h4>
                </div>
                <div className="col-md-7 col-sm-12">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link onClick={() => this.handleRouter("users")}>USER</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("shops")}>SHOP</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("product")}>PRODUCT</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("transaction")}>TRANSACTION</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("payment")}>PAYMENT</Nav.Link>
                    <Nav.Link onClick={this.handleLogout} className="header-logout" style={{padding:"8px", textDecoration:"None"}}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
        );
    }
}
export default connect(
    "isAdmin, token",
    action
  )(withRouter(HeaderAdmin));