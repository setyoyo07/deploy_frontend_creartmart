import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action } from "../store";
import Header from "../component/header"
import ReviewProduct from "../component/reviewProduct"
import ListSellerHistory from "../component/listSellerHistory"

 class SellerHistory extends React.Component {

    componentDidMount = async () => {
        await this.props.getUserShop();
        await this.props.getSellerHistoryData();
    };

    render() {

        const sellerHistoryData = this.props.listSellerHistoryData.map((item, key) => {
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
                <ListSellerHistory 
                    key={key}
                    transactionID = {cartData.id}
                    customerName = {cartData.user_id}
                    paymentStatus = {paymentStatus} 
                    totalPrice = {cartData.total_price}
                    listReviewProduct = {transactionProduct}
                />
            )
            });

        return (
            <div className="SellerHistory">
                < Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div class="bg-white shadow rounded overflow-hidden">
                                <div class="px-4 pt-0 pb-4 bg-dark">
                                    <div class="media align-items-end profile-header" style={{paddingTop:"20px"}}>
                                        <div class="profile mr-3">
                                            <img src={this.props.listShopInfo.image} alt="..."   width="130" class="rounded mb-2 img-thumbnail"/>
                                        </div>
                                        <div class="media-body mb-5 text-white">
                                            <h4 class="mt-0 mb-0">{this.props.listShopInfo.name}</h4>
                                            <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>
                                            {this.props.listShopInfo.street_address+", "+this.props.listShopInfo.city_type+" "
                                            +this.props.listShopInfo.city_name+", "+this.props.listShopInfo.province+" "
                                            +this.props.listShopInfo.postalcode}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-light p-4 d-flex justify-content-end text-center">
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">{this.props.listShopInfo.contact}</h5><small class="text-muted"> 
                                            <i class="fa fa-phone mr-1"></i>Contact</small>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">{this.props.listShopInfo.email}</h5><small class="text-muted"> 
                                            <i class="fa fa-envelope mr-1"></i>Email</small>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{padding:"20px 40px 0 40px", backgroundColor:"silver"}}>
                                    <div className="row">
                                        <h4>Seller History</h4>
                                    </div>
                                    <div className="row">
                                        { sellerHistoryData }
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "listShopInfo, listSellerHistoryData",
    action
  )(withRouter(SellerHistory));