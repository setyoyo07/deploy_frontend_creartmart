import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";
import {Modal, ButtonToolbar, Button} from 'react-bootstrap'

class ShopInfo extends React.Component {
    handleEditProfile = async () => {
        await this.props.putShopProfile();
        this.props.history.replace("/users/shop");
    }

    render() {

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
                                <h2 style={{fontWeight:"bolder"}}>EDIT SHOP PROFILE</h2>
                                <p style={{color:"#9BA5B8"}}>Update your shop profile here</p>
                            </div>
                            <div>
                                <form onSubmit={e => e.preventDefault(e)}>
                                    <div class="form-group">
                                        <label for="name">Shop Name :</label>
                                        <input type="text" class="form-control" name="shopName" 
                                        placeholder="Enter your shop name" pattern="[A-Za-z0-9].{8,}" 
                                        onChange={e => this.props.handleInput(e)} id="name" required/>
                                        <label for="username" style={{color:"grey", fontSize:"12px"}}>Minimum 8 characters, only contain letter and number</label>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control" name="shopEmail" 
                                        placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                        onChange={e => this.props.handleInput(e)} id="email" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact">Contact :</label>
                                        <input type="text" class="form-control" name="shopContact" 
                                        placeholder="Ex: 021999999" pattern="(?=.*\d).{11,}"
                                        onChange={e => this.props.handleInput(e)} id="contact" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="province">Province :</label>
                                        <input type="text" class="form-control" name="shopProvince" 
                                        placeholder="Enter your province address" pattern="(?=.*[a-zA-Z]).{3,}" 
                                        onChange={e => this.props.handleInput(e)} id="province" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="sel1">City Type:</label>
                                        <select class="form-control" id="sel1" name="shopCityType" 
                                        onChange={e => this.props.handleInput(e)}>
                                            <option value="kabupaten">Kabupaten</option>
                                            <option value="kota">Kota</option>
                                        </select>
                                    </div>                    
                                    <div class="form-group">
                                        <label for="cityName">City Name :</label>
                                        <input type="text" class="form-control" name="shopCityName" 
                                        placeholder="Enter name of your city  address" pattern="(?=.*[a-zA-Z]).{3,}" 
                                        onChange={e => this.props.handleInput(e)} id="cityName" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="street">Street address :</label>
                                        <input type="text" class="form-control" name="shopStreet" 
                                        placeholder="Enter your street address" 
                                        onChange={e => this.props.handleInput(e)} id="street"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="postalcode">Postal Code :</label>
                                        <input type="text" class="form-control" name="shopPostalCode" 
                                        placeholder="Enter your Postal Code address" pattern="(?=.*\d).{5,}"
                                        onChange={e => this.props.handleInput(e)} id="postalcode" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="image">Image :</label>
                                        <input type="text" class="form-control" name="shopImage" 
                                        placeholder="Put your shop image link" 
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
            <div>
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="px-4 pt-0 pb-4 bg-dark">
                        <div class="media align-items-end profile-header" style={{paddingTop:"20px"}}>
                            <div class="profile mr-3">
                                <img src={this.props.shopImage} alt="..."   width="130" class="rounded mb-2 img-thumbnail"/>
                            </div>
                            <div class="media-body mb-5 text-white">
                                <h4 class="mt-0 mb-0">{this.props.shopName}</h4>
                                <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>{this.props.shopAddress}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light p-4 d-flex justify-content-end text-center">
                        {this.props.shopId !== undefined
                            ? <div></div>
                            : <div className="row"> 
                            < EditProfile />                
                            <Link to="/users/shop/sellerhistory">
                                <Button type="btn" className="btn-primary" style={{marginLeft:"10px", color:"white"}}>
                                Seller History
                                </Button>
                            </Link>
                            </div>
                        }
                    </div>
                    <div class="bg-light p-4 d-flex justify-content-end text-center">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <h5 class="font-weight-bold mb-0 d-block">{this.props.shopContact}</h5><small class="text-muted"> 
                                <i class="fa fa-phone mr-1"></i>Contact</small>
                            </li>
                            <li class="list-inline-item">
                                <h5 class="font-weight-bold mb-0 d-block">{this.props.shopEmail}</h5><small class="text-muted"> 
                                <i class="fa fa-envelope mr-1"></i>Email</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "shopId",
    action
  )(withRouter(ShopInfo));