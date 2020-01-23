import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";
import ShopInfo from '../component/shopInfo';
import ShopProduct from '../component/shopProduct';

class Shop extends React.Component {

    componentDidMount = async () => {
        const shopId = this.props.match.params.id;
        if (shopId !== undefined){
            store.setState({shopId: shopId})
            await this.props.getShopInfo();
        } else if (this.props.token !== null) {
            store.setState({shopId:shopId})
            await this.props.getUserShop();
        } else {
            alert('You are not Login, Please Login or Register First')
            this.props.history.replace("/users/register");
        }
    };

    render() {
        console.warn("cek undefined", this.props.listShopProduct)
        const shopProduct = this.props.listShopProduct.map((item, key) => {
            return (
                < ShopProduct 
                    productId = {item.id}
                    productImage = {item.image}
                    shopId = {item.shop_id}
                />
                );
            });

        return (
        <div className="Shop">
            < Header />
            <div className="container" style={{margin:"20px 0"}}>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <ShopInfo
                            shopName = {this.props.listShopInfo.name}
                            shopImage = {this.props.listShopInfo.image}
                            shopContact = {this.props.listShopInfo.contact}
                            shopEmail = {this.props.listShopInfo.email}
                            shopAddress = {this.props.listShopInfo.street_address+", "
                            +this.props.listShopInfo.city_type+" "
                            +this.props.listShopInfo.city_name+", "
                            +this.props.listShopInfo.province+" "
                            +this.props.listShopInfo.postalcode}
                        />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        {this.props.shopId === undefined
                            ? <div className="row">
                                <Link to="/users/shop/addproduct" style={{paddingLeft:"18px"}}>
                                    <button type="button" className="btn btn-primary">Sell Product</button>
                                </Link>
                            </div>
                            : <div></div>
                        }
                        <div className="row">
                            { shopProduct }
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
    "listShopInfo, listShopProduct, isLogin, token, shopId",
    action
  )(withRouter(Shop));