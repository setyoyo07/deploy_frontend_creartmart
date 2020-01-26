import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import HeaderAdmin from '../component/headerAdmin';
import ListUsers from '../component/listUsers';

class AdminUsers extends React.Component {

    handleSearch = async () => {
        await this.props.getAdminSearchData();
        await this.props.history.replace("/admin/users");
    };

    componentDidMount = async () => {
        console.warn("cek param", this.props.category)
        await this.props.getAdminCategoryData();
    };
    
    render() {
        
        const usersData = this.props.listAdminCategoryData.map((item, key) => {
            let status
            if (item.status){
                status = "Active"
            } else {
                status = "Non Active"
            }
            return (
                <ListUsers
                    ID={item.id}
                    username={item.username}
                    email={item.email}
                    contact={item.contact}
                    address={item.address}
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
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Search by ID" onChange={e => this.props.handleInput(e)} 
                    className="mr-sm-2" name="keyword" style={{width:"70%"}}/>
                    <button type="submit" className="btn btn-danger" onClick={this.handleSearch}>Search</button>
                </form>
            </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Account Number</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                { usersData }
            </table>
        </div>
        );
    }
}
export default connect(
    "listAdminCategoryData, category",
    action
  )(withRouter(AdminUsers));