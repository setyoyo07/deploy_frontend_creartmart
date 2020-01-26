import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import HeaderAdmin from '../component/headerAdmin';

class AdminDashboard extends React.Component {

    render() {

        return (
        <div className="Admin Dashboard">
            < HeaderAdmin />
            <div style={{backgroundColor:"#FED964"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 style={{fontSize:"50px", color:"#10925F", fontWeight:"bolder"}}>Hello Admin!</h1>
                    </div>
                    <img src="https://image.freepik.com/free-vector/creative-tech-workspace_71609-1333.jpg"
                    alt="hello admin" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
        );
    }
}
export default connect(
    "",
    action
  )(withRouter(AdminDashboard));