import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";
import ProductImage from '../component/productImage';
import ProductDescription from '../component/productDescription';

class ProductDetail extends React.Component {

    componentDidMount = () => {
        const productId = this.props.match.params.id;
        store.setState({productId: productId})
        this.props.getProductDetail();
        console.warn("cekprodid", productId)
    };

    render() {

        const shopID = this.props.match.params.shopId;

        return (
        <div className="Home">
            < Header />
            <div className="container" style={{marginTop:"20px", marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <ProductImage
                            productImage = {this.props.listProductDetail.image}
                            shopId = {this.props.listProductDetail.shop_id} 
                        />
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <ProductDescription
                            shopID = {shopID}
                            productId = {this.props.listProductDetail.id}
                            productName = {this.props.listProductDetail.name}
                            productPrice = {this.props.listProductDetail.price}
                            productStock = {this.props.listProductDetail.stock}
                            productWeight = {this.props.listProductDetail.weight}
                            productDescription = {this.props.listProductDetail.description}
                        />
                    </div>
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
  )(withRouter(ProductDetail));