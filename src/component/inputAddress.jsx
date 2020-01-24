import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";

class InputAddress extends React.Component {
    
    handlePostAddress = async () => {
        await this.props.postAddress();
        this.props.history.push(`/users/checkout/${this.props.cartId}`);
    }

    render() {

        return (
            <div>
                <div className="row">
                    <h2>SHIPPING ADDRESS</h2>
                </div>
                <form onSubmit={e => e.preventDefault(e)}>
                    <div className ="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="country">Country :</label>
                                <input type="text" class="form-control" name="shippingCountry" 
                                placeholder="Enter your country name"
                                onChange={e => this.props.handleInput(e)} id="country" required/>
                            </div>
                            <div class="form-group">
                            <label for="sel1">City Type :</label>
                            <select class="form-control" id="sel1" name="shippingCityType" onChange={e => this.props.handleInput(e)}>
                                <option value="Kabupaten">Kabupaten</option>
                                <option value="Kota">Kota</option>
                            </select>
                            </div>                             
                            <div class="form-group">
                                <label for="street">Street Address :</label>
                                <input type="text" class="form-control" name="shippingStreet" 
                                placeholder="Enter your street address" 
                                onChange={e => this.props.handleInput(e)} id="street" required/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="province">Province :</label>
                                <input type="text" class="form-control" name="shippingProvince" 
                                placeholder="Enter your province name"
                                onChange={e => this.props.handleInput(e)} id="province" required/>
                            </div>
                            <div class="form-group">
                                <label for="cityName">City Name :</label>
                                <input type="text" class="form-control" name="shippingCityName" 
                                placeholder="Enter your city name" pattern="[a-zA-Z].{3,}"
                                onChange={e => this.props.handleInput(e)} id="cityName" required/>
                            </div>                             
                            <div class="form-group">
                                <label for="postalcode">Postal Code :</label>
                                <input type="text" class="form-control" name="shippingPostalcode" 
                                placeholder="Enter your postal code" 
                                onChange={e => this.props.handleInput(e)} id="postalcode" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sel2">Courier :</label>
                        <select class="form-control" id="sel2" name="shippingCourier" onChange={e => this.props.handleInput(e)}>
                            <option value="jne">JNE</option>
                            <option value="pos">POS</option>
                        </select>
                    </div>                             
                    <div style={{marginTop:"20px"}}>
                        <button type="submit" class="btn btn-danger" onClick={() => this.handlePostAddress()}>
                            Check Shipping Cost
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect(
    "isLogin, token, cartId",
    action
  )(withRouter(InputAddress));