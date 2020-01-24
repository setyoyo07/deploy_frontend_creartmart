import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import Header from "../component/header";
import Footer from "../component/footer";

class AddProduct extends React.Component {

    handlePostProduct = async () => {
        await this.props.postProduct();
        this.props.history.replace("/users/shop");
    }

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
                            <h2 style={{fontWeight:"bolder"}}>SELL PRODUCT</h2>
                                <p style={{color:"#9BA5B8"}}>Fill this form, then enjoy sell your product!</p>
                            </div>
                            <div>
                                <form onSubmit={e => e.preventDefault(e)}>
                                    <div class="form-group">
                                        <label for="name">Product Name :</label>
                                        <input type="text" class="form-control" name="productsName" 
                                        placeholder="Enter your product name"
                                        onChange={e => this.props.handleInput(e)} id="name" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="price">Price:</label>
                                        <input type="number" class="form-control" name="productsPrice" 
                                        placeholder="Currency in Rupiah" pattern="[0-9].{1,}"
                                        onChange={e => this.props.handleInput(e)} id="price" required/>
                                    </div>
                                    <div class="form-group">
                                    <label for="sel1">Select Category:</label>
                                    <select class="form-control" id="sel1" name="productsCategory" onChange={e => this.props.handleInput(e)}>
                                        <option value="accessoris">Accessoris</option>
                                        <option value="homeliving">Home & Living</option>
                                        <option value="clothshoes">Cloth & Shoes</option>
                                        <option value="toysparty">Toys & Party</option>
                                        <option value="art">Arts</option>
                                        <option value="hire">Hire Artis</option>
                                        <option value="cft">Craft Supplies & Tools</option>
                                    </select>
                                    </div>                             
                                    <div class="form-group">
                                        <label for="subcategory">Sub Category :</label>
                                        <input type="text" class="form-control" name="productsSubcategory" 
                                        placeholder="Write one which describe your product" 
                                        onChange={e => this.props.handleInput(e)} id="subcategory"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description :</label>
                                        <textarea class="form-control" name="productsDescription" 
                                        placeholder="Describe your product here" style={{height:"200px"}} 
                                        onChange={e => this.props.handleInput(e)} id="description"/>
                                    </div>
                                    <div class="form-group">
                                    <label for="sel2">Availability:</label>
                                    <select class="form-control" id="sel1" name="limited" onChange={e => this.props.handleInput(e)}>
                                        <option value="true">Limited</option>
                                        <option value="false">Always avalaible</option>
                                    </select>
                                    </div>                             
                                    <div class="form-group">
                                        <label for="stock">Stock:</label>
                                        <input type="number" class="form-control" name="productsStock" 
                                        placeholder="Enter available stock" pattern="[0-9].{1,}"
                                        onChange={e => this.props.handleInput(e)} id="stock" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="weight">Weight:</label>
                                        <input type="number" class="form-control" name="productsWeight" 
                                        placeholder="weight in gram" pattern="[0-9].{1,}" 
                                        onChange={e => this.props.handleInput(e)} id="weight" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="image">Image :</label>
                                        <input type="text" class="form-control" name="productsImage" 
                                        placeholder="Put your product image link" 
                                        onChange={e => this.props.handleInput(e)} id="image" required/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="submit" class="btn btn-primary" onClick={() => this.handlePostProduct()}>
                                            Sell Product!
                                        </button>
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
    "",
    action
  )(withRouter(AddProduct));