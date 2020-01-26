import React from 'react';
import Header from '../component/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";

class Blog extends React.Component {


    render() {

        return (
        <div>
            < Header />
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0i3MUE4dqwlxpq1Dzta-6XTeGb_KcYAuw6ErgdhYJC9X4-DTh"
                     alt="comingsoon" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(Blog));