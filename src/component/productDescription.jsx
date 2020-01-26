import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action } from "../store";

class ProductDescription extends React.Component {
    handleAddCart = async () => {
        if(this.props.listProductDetail.stock < this.props.quantityProduct){
            alert('Your quantity over limit')
        } else{
            await this.props.postCart();
            await this.props.history.replace("/users/cart");
        }
    };

    handleDeleteProduct = async () => {
        await this.props.deleteProduct();
        await this.props.history.replace("/users/shop")
    }

    render() {
        if (this.props.match.params.shopId !== undefined){
            const shopID = this.props.match.params.shopId;
            if (shopID.toString() === this.props.listShopInfo.id.toString()){
                store.setState({editable:true});
            } else {
                store.setState({editable:false});    
            }
        }
        return (
            <div style={{border:"solid 1px grey", borderRadius:"10%", minHeight:"400px", padding:"20px"}}>
                { this.props.editable
                    ? <div className="row justify-content-center">
                        <Link to={`/users/shop/editproduct/${this.props.productId}`}>
                            <button type="button" className="btn btn-primary" >Edit Product Data</button>
                        </Link>
                        <button type="button" onClick={this.handleDeleteProduct} className="btn btn-warning" style={{marginLeft:"10px"}}>
                            Delete Product
                        </button>
                    </div>
                    : <div></div>
                }
                <div className="productDescription">
                    <div className="row" style={{padding:"20px 0 0 20px"}}>
                        <h2 className="nameProduct">{this.props.productName}</h2>
                    </div>
                    <div className="row" style={{padding:"0 20px"}}>
                        <h4 className="priceProduct">Rp. {this.props.productPrice}</h4>
                    </div>
                    <div className="row" style={{padding:"0 20px"}}>
                        <h4 className="stockProduct">Available : {this.props.productStock} left</h4>
                    </div>
                    <div className="row" style={{padding:"0 20px"}}>
                        <h4 className="weightProduct">Weight : {this.props.productWeight} gram</h4>
                    </div>
                    <div className="row" style={{padding:"5px 20px"}}>
                        <h5 className="descriptionProduct">{this.props.productDescription}</h5>
                    </div>
                </div>
                <div style={{padding:"15px 10px"}}>   
                    <form>
                        <label for="number">Quantity</label>
                        <input type="number" name="quantityProduct" style={{width:"50px", borderRadius:"5%", marginLeft:"10px", paddingLeft:"10px"}} 
                        placeholder="1" onChange={e => this.props.handleInput(e)}></input><br/>
                        <button type="button" className="btn btn-danger" style={{marginTop:"10px"}} onClick={this.handleAddCart} >
                            Add to Cart
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(
    "token, quantityProduct, listProductDetail, listShopInfo, editable",
    action
  )(withRouter(ProductDescription));