import React from 'react';
import Header from '../component/header';
import CheckoutPayment from '../component/checkoutPayment';
import InputAddress from '../component/inputAddress';
import Footer from '../component/footer';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";

class CheckoutAddress extends React.Component {

    componentDidMount = () => {
        const cartId = this.props.match.params.id;
        store.setState({cartId: cartId})
        this.props.getCheckoutData();
    };

    render() {
        
        const checkoutData = this.props.listCheckoutData.map((item, key) => {
            return (
                <CheckoutPayment 
                    key={key}
                    totalItem = {item.cart.total_item}
                    totalItemPrice = {item.cart.total_item_price}
                    totalPrice = {item.cart.total_price}
                    shippingCost = {item.cart.shipping_cost}
                    cartId = {item.cart.id}
                />
            )
            });

        return (
        <div className="Checkout">
            < Header />
            <div className="container" style={{marginTop:"20px", marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-md-7 col-sm-12" style={{backgroundColor:"#F2F4F6", padding:"30px"}}>
                        < InputAddress />
                    </div>
                    <div className="col-md-5 col-sm-12" style={{backgroundColor:"#9BA5B8", padding:"30px"}}>
                        {checkoutData}  
                    </div>
                </div>
            </div>
            < Footer />
        </div>
        );
    }
}
export default connect(
    "listCheckoutData",
    action
  )(withRouter(CheckoutAddress));