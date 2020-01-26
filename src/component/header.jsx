import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action } from "../store";

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Modal, ButtonToolbar} from 'react-bootstrap'

class Header extends React.Component {

    handleLogout = async () => {
        await this.props.handleLogoutState();
        await store.setState({token: localStorage.getItem("token")})
        console.warn("cek token login", this.props.token)
        this.props.history.push("/");
        alert("Thanks for visiting our site, See you next time !")
    };
 
    handleRouter = async category => {
        await store.setState({category: category})
        this.props.getAllCategoryProduct();
        await this.props.history.push("/product/"+category);
    };

    handleSearch = async () => {
        await store.setState({category: 'search'})
        await this.props.getAllSearchProduct();
        await this.props.history.replace("/product/search/"+this.props.keyword);
    };

    handleLogin = async () => {
        await this.props.handleStateLogin();
        await store.setState({token: localStorage.getItem("token")})
        console.warn("cek token login", this.props.token)
        if (this.props.token !== null){
            if(this.props.isAdmin){
                await this.props.history.replace("/admin");
                alert('Halo Mimin')
            } else {
                await this.props.history.replace("/");
                alert("Hello, Welcome to CreArt Mart !")
            }
        }
        else {
            alert('Sorry your data is incorrect or your account is not registered')
        }
    };

    render() {

        const LoginModal = (props) => {
            return (
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                    <div className="container-fluid" style={{minHeight:"600px"}}>
                        <div className="boxLogin" style={{backgroundColor:"white", padding:"40px 30px 80px 30px", minHeight:"400px"}}> 
                            <div style={{textAlign:"center"}}>
                                <h2 style={{fontWeight:"bolder"}}>LOGIN</h2>
                                <p style={{color:"#9BA5B8"}}>Login with your CreArt Mart Account</p>
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
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" name="password" 
                                        placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        onChange={e => this.props.handleInput(e)} id="pwd" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 8 characters, must contain Uppercase, Lowercase letter, and number</label>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="submit" style={{width:"50%", marginTop:"20px"}} onClick={() => this.handleLogin()} class="btn btn-primary">Login</button>
                                        <p style={{color:"#9BA5B8", marginTop:"20px"}}>Don't have an account yet? Let's Register 
                                            <Link to="/users/register" style={{textDecoration:"none", color:"#5C699E"}}> here</Link>
                                        </p>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>
                );
            }
        
        const Login = () => {
            const [modalShow, setModalShow] = React.useState(false);
        
            return (
            <ButtonToolbar>
                <Button style={{backgroundColor:"#c904a6", border:"#c904a6", color:"white"}} onClick={() => setModalShow(true)}>
                Login
                </Button>
        
                <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
            );
        }
    
        return (
        <div className="container-fluid" style={{padding:"0"}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Navbar style={{backgroundColor: '#d9e7ff'}} expand="lg">
                <div className="col-md-2 col-sm-12 justify-content-center" style={{textAlign:"center"}}>
                    <Link to="/"><img src={require("../image/logoCreArt.png")} style={{width:"120px"}} alt="logo"></img></Link>
                </div>
                <div className="col-md-7 col-sm-12">
                    <Form onSubmit={e => e.preventDefault()} inline>
                        <FormControl type="text" placeholder="Search" onChange={e => this.props.handleInput(e)} 
                        className="mr-sm-2" name="keyword" style={{width:"70%"}}/>
                        <Button variant="outline-success" onClick={this.handleSearch}>Search</Button>
                    </Form>
                </div>
                <div className="col-md-2 col-sm-12" style={{textAlign:"center"}}>
                    {this.props.token === null 
                        ? <Nav className="mr-auto">
                            <Link to="/users/register" style={{padding:"8px", textDecoration:"None"}}>Register</Link>
                            < Login />
                            <Link to="/users/cart" className="fa fa-shopping-cart" style={{padding:"8px", fontSize:"20px", textDecoration:"None"}}></Link>
                        </Nav>
                        : <Nav className="mr-auto">
                            <Link onClick={this.handleLogout} className="header-logout" style={{padding:"8px", textDecoration:"None"}}>Logout</Link>
                            <Link to="/users/profile" className="header-profile" style={{padding:"8px", textDecoration:"None"}}>Profile</Link>
                            <Link to="/users/cart" className="fa fa-shopping-cart" style={{padding:"8px", fontSize:"20px", textDecoration:"None"}}></Link>
                        </Nav>
                        }
                </div>
            </Navbar>
            <Navbar style={{backgroundColor: '#d9e7ff'}} expand="lg">
                <div className="col-md-12 col-sm-12">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link onClick={() => this.handleRouter("accessoris")}>Accessoris</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("homeliving")}>Home & Living</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("clothshoes")}>Cloth & Shoes</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("toysparty")}>Toys & Party</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("art")}>Arts</Nav.Link>
                    <Nav.Link onClick={() => this.handleRouter("hire")}>Hire Artist</Nav.Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>   
        </div>
        );
    }
}
export default connect(
    "isAdmin, token, keyword",
    action
  )(withRouter(Header));