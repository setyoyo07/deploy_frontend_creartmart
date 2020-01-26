import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Category  from '../pages/category';
import ProductDetail from '../pages/productDetail';
import Shop from '../pages/shop';
import Register from '../pages/register';
import UserProfile from '../pages/userProfile';
import AddProduct from '../pages/addProduct';
import Cart from '../pages/cart';
import CheckoutAddress from '../pages/checkoutAddress';
import ReviewTransaction from '../pages/reviewTransaction';
import EditProduct from '../pages/editProduct';
import NotMatch from '../pages/notMatch';
import SellerHistory from '../pages/sellerHistory';
import SellerHistoryDetail from '../pages/sellerHistoryDetail';
import AdminDashboard from '../pages/adminDashboard';
import AdminUsers from '../pages/adminUsers';
import AdminShops from '../pages/adminShops';
import AdminProduct from '../pages/adminProduct';
import AdminPayment from '../pages/adminPayment';
import AdminTransaction from '../pages/adminTransaction';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/admin" component={AdminDashboard}/>
            <Route exact path="/admin/users" component={AdminUsers}/>
            <Route exact path="/admin/shops" component={AdminShops}/>
            <Route exact path="/admin/product" component={AdminProduct}/>
            <Route exact path="/admin/payment" component={AdminPayment}/>
            <Route exact path="/admin/transaction" component={AdminTransaction}/>
            <Route exact path="/product/:category" component={Category}/>
            <Route exact path="/product/search/:keyword" component={Category}/>
            <Route exact path="/product/detail/:id" component={ProductDetail}/>
            <Route exact path="/shop/info/:id" component={Shop}/>
            <Route exact path="/users/register" component={Register}/>
            <Route exact path="/users/profile" component={UserProfile}/>
            <Route exact path='/users/shop' component={Shop}/>
            <Route exact path="/users/shop/addproduct" component={AddProduct}/>
            <Route exact path="/users/shop/sellerhistory" component={SellerHistory}/>
            <Route exact path="/users/shop/sellerhistory/:id" component={SellerHistoryDetail}/>
            <Route exact path="/users/shop/editproduct/:id" component={EditProduct}/>
            <Route exact path="/users/shop/:shopId/product/detail/:id" component={ProductDetail}/>
            <Route exact path="/users/cart" component={Cart}/>
            <Route exact path="/users/checkout/:id" component={CheckoutAddress}/>
            <Route exact path="/users/transaction/:id"component={ReviewTransaction}/>
            <Route component={NotMatch}/>
        </Switch>
    )
}

export default MainRoute;