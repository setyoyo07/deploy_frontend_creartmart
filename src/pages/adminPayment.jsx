import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import HeaderAdmin from '../component/headerAdmin';
import ListPayment from '../component/listPayment';

class AdminPayment extends React.Component {

    componentDidMount = async () => {
        console.warn("cek param", this.props.category)
        await this.props.getAdminCategoryData();
    };
    
    render() {
        
        const paymentData = this.props.listAdminCategoryData.map((item, key) => {
            let status
            if (item.status){
                status = "Active"
            } else {
                status = "Non Active"
            }
            return (
                <ListPayment
                    ID={item.id}
                    paymentMethod={item.payment_method}
                    accountName={item.account_name}
                    accountNumber={item.account_number}
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
                <button type="submit" className="btn btn-warning" onClick={this.handleSearch}>Add Payment Method</button>
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Payment Method</th>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                { paymentData }
            </table>
        </div>
        );
    }
}
export default connect(
    "listAdminCategoryData, category",
    action
  )(withRouter(AdminPayment));