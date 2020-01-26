import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action, store } from "../store";
import HeaderAdmin from '../component/headerAdmin';
import ListProduct from '../component/listProduct';

class AdminProduct extends React.Component {

    handleSearch = async () => {
        await store.setState({productId: this.props.keyword})
        await this.props.getProductDetail();
        await store.setState({listAdminCategoryData: [this.props.listProductDetail]})
        await this.props.history.replace("/admin/product");
    };

    componentDidMount = async () => {
        console.warn("cek param", this.props.category)
        await this.props.getAdminCategoryData();
    };
    
    render() {
        
        const productData = this.props.listAdminCategoryData.map((item, key) => {
            let status, limited,promo
            if (item.status){
                status = "Active"
            } else {
                status = "Non Active"
            }
            if (item.limited){
                limited = "Yes"
            } else {
                limited = "No"
            }
            if (item.promo){
                promo = "Yes"
            } else {
                promo = "No"
            }
            return (
                <ListProduct
                    ID={item.id}
                    name={item.name}
                    shopID={item.shop_id}
                    price={item.price}
                    category={item.category}
                    limited={limited}
                    sold={item.sold}
                    stock={item.stock}
                    promo={promo}
                    discount={item.discount}
                    weight={item.weight}
                    status={status}
                />
                )})
        
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Shop ID</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Limited</th>
                    <th>Sold</th>
                    <th>Stock</th>
                    <th>Promo</th>
                    <th>Discount</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                { productData }
            </table>
        </div>
        );
    }
}
export default connect(
    "listAdminCategoryData, listProductDetail, category, keyword",
    action
  )(withRouter(AdminProduct));