import React from 'react';
import Header from '../component/header';
import SlideBar from '../component/slideBar';
import ListProduct from '../component/listProductHome';
import About from '../component/about';
import Footer from '../component/footer';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";

class Home extends React.Component {

    componentDidMount = async () => {
        await this.props.getPopularProduct();
        await this.props.getLimitedProduct();
        await store.setState({category: "cft"})
        this.props.getAllCategoryProduct();
    };

    render() {
        
        const popularProduct = this.props.listPopularProduct.map((item, key) => {
            const productShop = item.shop_id
            return (
                <ListProduct
                    key={key}
                    productName = {item.name}
                    productPrice = {item.price}
                    productImage = {item.image}
                    productStock = {item.stock}
                    productId = {item.id}
                    shopId = {productShop.id}
                    shopName = {productShop.name}
                    />
              );
            });

        const craftToolsProduct = this.props.listCategoryProduct.map((item, key) => {
            const productShop = item.shop_id
            return (
                <ListProduct
                    key={key}
                    productName = {item.name}
                    productPrice = {item.price}
                    productImage = {item.image}
                    productStock = {item.stock}
                    productId = {item.id}
                    shopId = {productShop.id}
                    shopName = {productShop.name}
                />
                );
            });
            
        const limitedProduct = this.props.listLimitedProduct.map((item, key) => {
            const productShop = item.shop_id
            return (
                <ListProduct
                    key={key}
                    productName = {item.name}
                    productPrice = {item.price}
                    productImage = {item.image}
                    productStock = {item.stock}
                    productId = {item.id}
                    shopId = {productShop.id}
                    shopName = {productShop.name}
                    />
                );
            });

        return (
        <div className="Home">
            < Header />
            < SlideBar />
            <div className="container" style={{marginTop:"30px"}}>
                <div className='row listTitle' style={{alignItems:"center"}}>
                    <div className="col-md-8 col-sm-12" style={{textAlign:"left"}}>
                        <Link to="/product/popular" style={{ color:"#fc03cf", textDecoration:"none", fontFamily:"'Comic Sans MS', cursive, sans-serif"}}>
                            <h2>Popular Product</h2>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12" style={{textAlign:"right"}}>
                        <p><Link to="/product/popular" style={{color:"grey"}}>See More</Link></p>
                    </div>
                </div>
                <div className="row listProduct">
                    { popularProduct }
                </div>
            </div>
            <div className="container" style={{marginTop:"30px"}}>
                <div className='row listTitle' style={{alignItems:"center"}}>
                    <div className="col-md-8 col-sm-12" style={{textAlign:"left"}}>
                        <Link to="/product/cft" style={{ color:"#fc03cf", textDecoration:"none", fontFamily:"'Comic Sans MS', cursive, sans-serif"}}>
                            <h2>Craft Supplies & Tools</h2>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12" style={{textAlign:"right"}}>
                        <p><Link to="/product/cft" style={{color:"grey"}}>See More</Link></p>
                    </div>
                </div>
                <div className="row listProduct">
                    { craftToolsProduct }
                </div>
            </div>
            <div className="container" style={{marginTop:"30px", marginBottom:"50px"}}>
                <div className='row listTitle' style={{alignItems:"center"}}>
                <div className="col-md-8 col-sm-12" style={{textAlign:"left"}}>
                        <Link to="/product/popular" style={{ color:"#fc03cf", textDecoration:"none", fontFamily:"'Comic Sans MS', cursive, sans-serif"}}>
                            <h2>Limited Product</h2>
                        </Link>
                    </div>
                </div>
                <div className="row listProduct">
                    { limitedProduct }
                </div>
                <div className="row buttonBuy" style={{justifyContent:"center"}}>
                <Link to="/product/limited">
                    <button type="button" className="btn btn-danger" style={{color:"white"}}>
                        Buy Now!
                    </button>
                </Link>
                </div>
            </div>
            <div style={{backgroundColor:"#DFE6ED"}}>
                < About />
            </div>
            < Footer />
        </div>
        );
    }
}
export default connect(
    "listPopularProduct, listLimitedProduct, listCategoryProduct",
    action
  )(withRouter(Home));