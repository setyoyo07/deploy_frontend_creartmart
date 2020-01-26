import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import HeaderAdmin from '../component/headerAdmin';
import ReviewProduct from '../component/reviewProduct';
import ListTransaction from '../component/listTransaction';

class AdminTransaction extends React.Component {

    handleSearch = async () => {
        await this.props.getAdminSearchData();
        await this.props.history.replace("/admin/transaction");
    };

    componentDidMount = () => {
        console.warn("cek param", this.props.category)
        this.props.getAdminCategoryData();
    };
    
    render() {

        const transactionData = this.props.listAdminCategoryData.map((item, key) => {
            const cartData = item.cart[0];
            console.warn("cek cart data", cartData)
            const transactionDetailData = item.transaction_detail;
            let paymentStatus
            if (cartData.payment_status) {
                paymentStatus = "VERIFIED"
            } else {
                paymentStatus = "NOT VERIFIED"
            }

            const transactionProduct = transactionDetailData.map((data, key) => {
                return (
                    <ReviewProduct
                        productName = {data.product_id}
                        productQuantity = {data.quantity}
                    />
                )
            })

            return (
                <ListTransaction 
                    transactionID = {cartData.id}
                    customerName = {cartData.user_id}
                    shopName = {cartData.shop_id}
                    paymentStatus = {paymentStatus} 
                    totalPrice = {cartData.total_price}
                    listReviewProduct = {transactionProduct}
                />
            )
            });

        return (
        <div className="Admin Dashboard">
            < HeaderAdmin />
            <div className="row p-4 justify-content-center">
                <h2>{this.props.category.toUpperCase()} DATA</h2> 
            </div>
            <div className="row">
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Search by ID" onChange={e => this.props.handleInput(e)} 
                    className="mr-sm-2" name="keyword" style={{width:"70%"}}/>
                    <button type="submit" className="btn btn-danger" onClick={this.handleSearch}>Search</button>
                </form>
            </div>
            <div className="row">
                { transactionData }
            </div>
        </div>
        );
    }
}
export default connect(
    "listAdminCategoryData, category",
    action
  )(withRouter(AdminTransaction));