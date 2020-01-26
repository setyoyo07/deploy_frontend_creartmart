import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { action} from "../store";
import HeaderAdmin from '../component/headerAdmin';
import ListShops from '../component/listShops';

class AdminShops extends React.Component {

    handleSearch = async () => {
        await this.props.getAdminSearchData();
        await this.props.history.replace("/admin/shops");
    };

    componentDidMount = async () => {
        console.warn("cek param", this.props.category)
        await this.props.getAdminCategoryData();
    };
    
    render() {
        
        const shopsData = this.props.listAdminCategoryData.map((item, key) => {
            let status
            if (item.status){
                status = "Active"
            } else {
                status = "Non Active"
            }
            return (
                <ListShops
                    ID={item.id}
                    name={item.name}
                    email={item.email}
                    contact={item.contact}
                    userID={item.user_id}
                    cityType={item.city_type}
                    cityName={item.city_name}
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
                    <th>Shop Name</th>
                    <th>Email</th>
                    <th>User ID</th>
                    <th>Contact</th>
                    <th>City Type</th>
                    <th>City Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                { shopsData }
            </table>
        </div>
        );
    }
}
export default connect(
    "listAdminCategoryData, category",
    action
  )(withRouter(AdminShops));