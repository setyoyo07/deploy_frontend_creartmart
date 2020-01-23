import React from 'react';
import Header from '../component/header';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";

class NotMatch extends React.Component {


    render() {

        return (
        <div>
            < Header />
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzg6QDosEWXl9u4TJsuno5KgB_IEt5WCpEPQ4-Qjatp6ieMPE0" style={{width:"60%"}}/>
                </div>
            </div>
        </div>
        );
    }
}
export default connect(
    "listCartData",
    action
  )(withRouter(NotMatch));