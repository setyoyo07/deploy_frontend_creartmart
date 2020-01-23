import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";
import Header from "../component/header";
import Footer from "../component/footer";

class EditProduct extends React.Component {

    handleEditProduct = async () => {
        await this.props.putProduct();
        this.props.history.replace("/users/shop");
    }

    componentDidMount = () => {
        const productId = this.props.match.params.id;
        store.setState({productId: productId})
        this.props.getProductDetail();
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
                            <h2 style={{fontWeight:"bolder"}}>EDIT PRODUCT</h2>
                            </div>
                            <div>
                                <form onSubmit={e => e.preventDefault(e)}>
                                    <div class="form-group">
                                        <label for="name">Product Name :</label>
                                        <input type="text" class="form-control" name="productsName" 
                                        placeholder={this.props.listProductDetail.name}
                                        onChange={e => this.props.handleInput(e)} id="name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="price">Price:</label>
                                        <input type="number" class="form-control" name="productsPrice" 
                                        placeholder={this.props.listProductDetail.price} pattern="[0-9].{1,}" 
                                        onChange={e => this.props.handleInput(e)} id="price"/>
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
                                        placeholder={this.props.listProductDetail.subcategory} 
                                        onChange={e => this.props.handleInput(e)} id="subcategory"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description :</label>
                                        <textarea class="form-control" name="productsDescription" 
                                        placeholder={this.props.listProductDetail.description} style={{height:"200px"}} 
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
                                        placeholder={this.props.listProductDetail.stock} pattern="[0-9].{1,}" 
                                        onChange={e => this.props.handleInput(e)} id="stock"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="weight">Weight:</label>
                                        <input type="number" class="form-control" name="productsWeight" 
                                        placeholder={this.props.listProductDetail.weight} pattern="[0-9].{1,}"
                                        onChange={e => this.props.handleInput(e)} id="weight"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="image">Image :</label>
                                        <input type="text" class="form-control" name="productsImage" 
                                        placeholder={this.props.listProductDetail.image} 
                                        onChange={e => this.props.handleInput(e)} id="image"/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="submit" class="btn btn-primary" onClick={() => this.handleEditProduct()}>
                                            Edit Product
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
    "listProductDetail",
    action
  )(withRouter(EditProduct));