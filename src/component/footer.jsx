import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class Footer extends React.Component {

    render() {
        return (
        <div className="container-fluid" style={{backgroundColor:"#C3CFD9", padding:"0"}}>
            <footer className="page-footer font-small blue pt-4">
            <div className="container text-center text-md-left"> 
                <div className="row">
                    <div className="col-md-4 mb-md-0 mb-3" style={{textAlign:"center"}}>
                        <h5 className="text-uppercase">Sell</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link style={{textDecoration:"none"}} to="/users/shop">Lets be a Seller</Link>
                            </li>   
                            <li>
                                <Link style={{textDecoration:"none"}} to="/product/cft">Find your Craft Supplies& Tools</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3" style={{textAlign:"center"}}>
                        <h5 className="text-uppercase">Contact</h5>
                        <p>Jalan Raya Tidar No.123 Malang</p>
                        <p>021 123456789</p>  
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-4 mb-md-0 mb-3" style={{textAlign:"center"}}>
                        <h5 className="text-uppercase">More</h5>
                        <ul className="list-unstyled">
                        <li>
                            <Link to="/">CreArt Blog</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3" style={{backgroundColor:"#B2ACFA"}}>
                © 2020 Copyright:
                <a href="#"> CreArt</a>
            </div>
            </footer>
        </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(Footer));