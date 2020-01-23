import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, action} from "../store";
import ReviewComponent from "../component/reviewComponent";
import PaymentDetail from "../component/paymentDetail";
import ReviewProduct from "../component/reviewProduct";

class ReviewTransaction extends React.Component {

    componentDidMount = () => {
        const cartId = this.props.match.params.id;
        store.setState({cartId: cartId})
        this.props.getReviewTransactionData();
    };

    render() {
        const transactionProduct = this.props.listReviewProductData.map((item) => {
            return (
                <ReviewProduct
                    productName = {item.product_id.name}
                    productQuantity = {item.quantity}
                />
            )
            });

        const transactionData = this.props.listReviewCartData.map((item, key) => {
            return (
                <ReviewComponent 
                    key={key}
                    transactionID = {item.id}
                    totalItemPrice = {item.total_item_price}
                    totalPrice = {item.total_price}
                    shippingCost = {item.shipping_cost}
                    listReviewProduct = {transactionProduct}
                />
            )
            });

        const paymentData = this.props.listReviewCartData.map((item) => {
            let paymentStatus
            if (item.payment_status) {
                paymentStatus = "VERIFIED"
            } else {
                paymentStatus = "NOT VERIFIED"
            }
            return (
                <PaymentDetail
                    paymentMethod = {item.payment_id.payment_method}
                    paymentAccountName = {item.payment_id.account_name}
                    paymentAccountNumber = {item.payment_id.account_number}
                    paymentStatus = {paymentStatus}
                />
            )
            });

        return (
        <div className="Checkout">
            < Header />
            <div className="container" style={{marginTop:"20px", marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-md-7 col-sm-12" style={{backgroundColor:"#F2F4F6", padding:"30px"}}>
                        { transactionData }
                    </div>
                    <div className="col-md-5 col-sm-12" style={{backgroundColor:"#9BA5B8", padding:"30px"}}>
                        { paymentData }
                    </div>
                </div>
            </div>
            < Footer />
        </div>
        );
    }
}
export default connect(
    "listReviewProductData, listReviewCartData",
    action
  )(withRouter(ReviewTransaction));