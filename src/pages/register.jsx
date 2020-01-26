import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import Header from "../component/header";
import Footer from "../component/footer";

class Register extends React.Component {

    handleRegister = async () => {
        await this.props.handleStateRegister();
        if (this.props.isRegister === true){
            await this.props.handleStateLogin();
            await this.props.history.replace("/");
            console.warn("cektoken", this.props.token)
        }
    };   
    
    render() {

        return (
        <div>
            < Header />
            <div className="container Register">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="bgRegister col-md-6">
                        <div className="boxLogin" style={{backgroundColor:"white", padding:"40px 30px 80px 30px", minHeight:"400px"}}> 
                            <div style={{textAlign:"center"}}>
                                <h2 style={{fontWeight:"bolder"}}>REGISTER ACCOUNT</h2>
                                <p style={{color:"#9BA5B8"}}>CreArt your CreArt Mart Account</p>
                            </div>
                            <div>
                                <form onSubmit={e => e.preventDefault(e)}>
                                    <div class="form-group">
                                        <label for="username">Username :</label>
                                        <input type="text" class="form-control" name="username" 
                                        placeholder="Enter username" pattern="[A-Za-z0-9].{4,}"
                                        onChange={e => this.props.handleInput(e)} id="username" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 4 characters, only contain letter and number</label>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control" name="email" 
                                        placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        onChange={e => this.props.handleInput(e)} id="email" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type={this.props.typeText} class="form-control" name="password" 
                                        placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                        onChange={e => this.props.handleInput(e)} id="pwd" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 8 characters, must contain Uppercase, Lowercase letter, and number</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" onClick={e => this.props.handleSeePassword(e)}/>Show Password
                                    </div>                            
                                    <div class="form-group">
                                        <label for="accountNumber">Account Number:</label>
                                        <input type="text" class="form-control" name="accountNumber" 
                                        placeholder="Enter Account Number" pattern="(?=.*\d).{1,}"
                                        onChange={e => this.props.handleInput(e)} id="accountNumber" required/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="submit" style={{width:"50%", marginTop:"20px"}} class="btn btn-primary" onClick={() => this.handleRegister()}>
                                            Register
                                        </button>
                                            <p style={{color:"#9BA5B8", marginTop:"20px"}}>Don't have an account yet? Let's Login ! </p>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            < Footer />
        </div>
        );
    }
}
export default connect(
    "isRegister, token, typeText",
    action
  )(withRouter(Register));