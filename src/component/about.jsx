import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

const About = () => {

    return (
        <div className="container" style={{padding:"20px 20px"}}>
            <div className="row justify-content-center" style={{textAlign:"center"}}>
                <h2>What You Can Do In CreArtMart ?</h2>
            </div>
            <div className="row" style={{marginTop:"30px"}}>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <img src="https://cdn130.picsart.com/289017235003211.png?r1024x1024" alt="diy" style={{width:"35%", marginBottom:"10px"}}/>
                    <h4>Find & Buy Artsy Things</h4>
                    <p>A lot of unique, eye catching, aesthetic, and artsy thing available here. You can search by category, take a look, and buy it easily.</p>
                </div>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <img src="https://image.flaticon.com/icons/png/512/2323/2323849.png" alt="diy" style={{width:"25%", marginBottom:"10px"}}/>
                    <h4>Sell Your Own Product</h4>
                    <p>Not only buy, you can sell your product too. You can sell any product which have art values, start from painting, handmade craft, furniture, design service, craft supplies, home decoration, and many more.</p>
                </div>
                <div className="col-md-4 col-sm-12" style={{textAlign:"center"}}>
                    <img src="https://image.flaticon.com/icons/png/512/2049/2049036.png" alt="diy" style={{width:"25%", marginBottom:"10px"}}/>
                    <h4>Do It Yourself !</h4>
                    <p>Do you want too create something? Or want to sharp your creativity skills? It's a right place to find some reference, supplies, and tools.</p>
                </div>
            </div>
        </div>
        );
    }

export default connect(
    "",
    action
  )(withRouter(About));