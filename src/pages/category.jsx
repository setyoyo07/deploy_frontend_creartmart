import React from 'react';
import Header from '../component/header';
import SlideBar from '../component/slideBar';
import ListProduct from '../component/listProductHome';
import Footer from '../component/footer';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";

class Category extends React.Component {

    componentDidMount = async () => {
        const paramCategory = this.props.match.params.category;
        console.warn("cek param", paramCategory)
        if (paramCategory !== undefined){
            await store.setState({category: paramCategory})
            await this.props.getAllCategoryProduct();
        } else {
            await store.setState({category: 'search'})
            console.warn("cek category", this.props.keyword)
            await this.props.getAllSearchProduct();
        }
    };

    render() {
        const captionGenerate = () => {
            if(this.props.category === 'popular') {
                return(
                    <div>
                        <h2>Popular Products</h2>
                        <p>Cool! It's so Trendy and Hits</p>
                    </div>
                )
            } else if(this.props.category === 'limited') {
                return(
                    <div>
                        <h2>Limited Product</h2>
                        <p>Grab Fast and Checkout!</p>
                    </div>
                )
            } else if (this.props.category === 'promo') {
                return(
                    <div>
                        <h2>Promo Products</h2>
                        <p>Don't worry about your wallet, It's shopping time!</p>
                    </div>
                )
            } else if (this.props.category === 'cft') {
                return(
                    <div>
                        <h2>Craft Supplies & Tools</h2>
                        <p>Find your craft needs here, and lets CreArt!</p>
                    </div>
                )
            } else if (this.props.category === 'accessoris') {
                return(
                    <div>
                        <h2>Accessoris</h2>
                        <p>A little things called loved</p>
                    </div>
                )
            } else if (this.props.category === 'homeliving') {
                return(
                    <div>
                        <h2>Home & Living</h2>
                        <p>Make your Home Sweet Home</p>
                    </div>
                )
            } else if (this.props.category === 'clothshoes') {
                return(
                    <div>
                        <h2>Cloth & Shoes</h2>
                        <p>Be fashionable and enjoy your day!</p>
                    </div>
                )
            } else if (this.props.category === 'toysparty') {
                return(
                    <div>
                        <h2>Toys & Party</h2>
                        <p>Let's have fun with some Arts!</p>
                    </div>
                )
            } else if (this.props.category === 'art') {
                return(
                    <div>
                        <h2>Arts</h2>
                        <p>Earth without Art is just Eh!</p>
                    </div>
                )
            }  else if (this.props.category === 'hire') {
                return(
                    <div>
                        <h2>Hire Artists</h2>
                        <p>Great Talent Available here</p>
                    </div>
                )
            }   else if (this.props.category === 'search') {
                return(
                    <div>
                        <h2>Search Results for :</h2>
                        <h4>{this.props.keyword}</h4>
                    </div>
                )
            }
        }
        const caption = captionGenerate()
        const categoryProduct = this.props.listCategoryProduct.map((item, key) => {
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
            <div className="container" style={{marginTop:"20px"}}>
                <div className='row listTitle' style={{alignItems:"center"}}>
                    <div className="col-md-8 col-sm-12" style={{textAlign:"left", color:"#fc03cf"}}>
                        {caption}
                    </div>
                </div>
                <div className="row listProduct">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            { (categoryProduct.length === 0)
                            ? <div className="container-fluid">
                                <h3 style={{textAlign:"center"}}>Oops, Sorry! Product with this Category is not available</h3>
                                <div className="row justify-content-center">
                                    <img src="https://ih1.redbubble.net/image.80356487.4441/tb,1000x1000,small-pad,1000x1000,f8f8f8.u17.jpg"
                                    alt="image not available" style={{margin:"0 auto", width:"20%"}}></img>
                                </div>
                            </div>
                            : categoryProduct }
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </div>
        );
    }
}
export default connect(
    "listCategoryProduct, category, keyword",
    action
  )(withRouter(Category));