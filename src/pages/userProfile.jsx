import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";
import Header from "../component/header"
import ReviewProduct from "../component/reviewProduct"
import OrderHistory from "../component/orderHistory"
import {Modal, ButtonToolbar, Button} from 'react-bootstrap'

 class UserProfile extends React.Component {
    handleEditProfile = async () => {
        await this.props.putUserProfile();
        this.props.history.push("/users/profile");
    }

    componentDidMount = async () => {
        await this.props.getUserProfile();
        await this.props.getOrderHistoryData();
    };

    render() {

        const orderHistoryData = this.props.listOrderHistoryData.map((item, key) => {
            const cartData = item.cart;
            const transactionDetailData = item.transaction_detail;
            let paymentStatus
            if (cartData.payment_status) {
                paymentStatus = "VERIFIED"
            } else {
                paymentStatus = "NOT VERIFIED"
            }

            const transactionProduct = transactionDetailData.map((data, key) => {
                return (
                    <ReviewProduct
                        productName = {data.product_id}
                        productQuantity = {data.quantity}
                    />
                )
            })

            return (
                <OrderHistory 
                    key={key}
                    transactionID = {cartData.id}
                    shopName = {cartData.shop_id}
                    paymentStatus = {paymentStatus} 
                    totalPrice = {cartData.total_price}
                    listReviewProduct = {transactionProduct}
                />
            )
            });

        const EditModal = (props) => {
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
                                <h2 style={{fontWeight:"bolder"}}>EDIT USER PROFILE</h2>
                                <p style={{color:"#9BA5B8"}}>Update your profile here</p>
                            </div>
                            <div>
                                <form onSubmit={e => e.preventDefault(e)}>
                                    <div class="form-group">
                                        <label for="username">Username :</label>
                                        <input type="text" class="form-control" name="username" 
                                        placeholder="Enter username" pattern="[A-Za-z0-9].{8,}"
                                        onChange={e => this.props.handleInput(e)} id="username" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 8 characters, only contain letter and number</label>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Konfirmasi Password:</label>
                                        <input type="password" class="form-control" name="password" 
                                        placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        onChange={e => this.props.handleInput(e)} id="pwd" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 8 characters, must contain Uppercase, Lowercase letter, and number</label>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Name :</label>
                                        <input type="text" class="form-control" name="userName" 
                                        placeholder="Enter your name" 
                                        onChange={e => this.props.handleInput(e)} id="name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control" name="userEmail" 
                                        placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        onChange={e => this.props.handleInput(e)} id="email"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact">Contact :</label>
                                        <input type="text" class="form-control" name="userContact" 
                                        placeholder="Ex: 021999999" pattern="(?=.*\d){11,}"
                                        onChange={e => this.props.handleInput(e)} id="contact"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">Address :</label>
                                        <input type="text" class="form-control" name="userAddress" 
                                        placeholder="Enter your address" 
                                        onChange={e => this.props.handleInput(e)} id="address"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="accountNumber">Account Number :</label>
                                        <input type="text" class="form-control" name="accountNumber" 
                                        placeholder="Enter your Account Number" pattern="(?=.*\d){1,}"
                                        onChange={e => this.props.handleInput(e)} id="accountNumber"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="image">Image :</label>
                                        <input type="text" class="form-control" name="userImage" placeholder="Put your shop image link" 
                                        onChange={e => this.props.handleInput(e)} id="image"/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="submit"  style={{width:"50%", marginTop:"20px"}} onClick={() => this.handleEditProfile()} class="btn btn-primary">Edit Profile</button>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            );
        }
        
        const EditProfile = () => {
            const [modalShow, setModalShow] = React.useState(false);
        
            return (
            <ButtonToolbar>
                <Button style={{backgroundColor:"#c904a6", border:"#c904a6", color:"white"}} onClick={() => setModalShow(true)}>
                Edit Profile
                </Button>
        
                <EditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
            );
        }

        return (
            <div className="Home">
                < Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div class="bg-white shadow rounded overflow-hidden">
                                <div class="px-4 pt-0 pb-4 bg-info">
                                    <div class="media align-items-end profile-header" style={{paddingTop:"20px"}}>
                                        <div class="profile mr-3">
                                            {this.props.listUserProfile.image === undefined || this.props.listUserProfile.image === ""
                                            ?<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT65h0bP-rBx3Hc68FR0U6dJ_9EhTp6fpP1i43GePMgh-UX_qGf"
                                            alt="gambar profile" width="150" class="rounded mb-2 img-thumbnail"/>
                                            :<img src={this.props.listUserProfile.image} alt="gambar profile" width="130" class="rounded mb-2 img-thumbnail"/>
                                            }
                                        </div>
                                        <div class="media-body mb-5 text-white">
                                            <h4 class="mt-0 mb-0">{this.props.listUserProfile.name}</h4>
                                            <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>
                                                {this.props.listUserProfile.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-light p-3 d-flex justify-content-left text-center">
                                    < EditProfile />
                                    <Link to="/users/shop" style={{marginLeft:'10px'}}>
                                        <button type="button" className="btn btn-primary">My Shop</button>
                                    </Link>
                                </div>
                                <div class="bg-light p-3 d-flex justify-content-end text-center">
                                    <ul class="list-inline mb-0" style={{padding:"5px"}}>
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">{this.props.listUserProfile.contact}</h5><small class="text-muted">
                                                <i class="fa fa-phone mr-1"></i>Contact</small>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">{this.props.listUserProfile.email}</h5><small class="text-muted"> 
                                            <i class="fa fa-envelope mr-1"></i>Email</small>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{padding:"20px 0 0 40px", backgroundColor:"silver"}}>
                                    <div className="row">
                                        <h4>Order History</h4>
                                    </div>
                                    <div className="row">
                                        { orderHistoryData }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "listUserProfile, listOrderHistoryData",
    action
  )(withRouter(UserProfile));