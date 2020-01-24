import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class About extends React.Component {

    render() {
        return (
        <div className="container" style={{padding:"20px 20px"}}>
            <div className="row justify-content-center">
                <h2>What You Can Do In CreArtMart ?</h2>
            </div>
            <div className="row" style={{marginTop:"30px"}}>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <h4>Find & Buy Artsy Things</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ratione quis porro, at neque suscipit doloremque earum quod veritatis, in natus. Harum velit qui odio et dignissimos eos, rerum quam.</p>
                </div>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <h4>Sell Your Own Product</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ratione quis porro, at neque suscipit doloremque earum quod veritatis, in natus. Harum velit qui odio et dignissimos eos, rerum quam.</p>
                </div>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <h4>Do It Yourself !</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ratione quis porro, at neque suscipit doloremque earum quod veritatis, in natus. Harum velit qui odio et dignissimos eos, rerum quam.</p>
                </div>
            </div>
        </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(About));