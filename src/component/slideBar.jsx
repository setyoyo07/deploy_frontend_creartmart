import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const SlideBar = (props) => {

    return (
        <div className="container-fluid" style={{backgroundColor:"#B2ACFA"}}>
            <div className="row align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <img src="https://secure.img1-fg.wfcdn.com/im/00135103/c_crop_resize_zoom-h280-w663%5Ecompr-r85/1060/106068908/default_name.jpg" alt="gambar slidebar" style={{width:"100%"}}/>
                </div>
                <div className="col-md-4" style={{paddingLeft:"30px"}}>
                    <h2 style={{fontSize:"60px", fontFamily:"Georgia, serif"}}>CREATE,</h2>
                    <h2 style={{fontSize:"40px", fontFamily:"Georgia, serif"}}>MARKET,</h2>
                    <h2 style={{fontSize:"50px", fontFamily:"Georgia, serif"}}>& SELL !</h2>
                </div>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(SlideBar));