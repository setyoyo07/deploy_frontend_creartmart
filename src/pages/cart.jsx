import React from 'react';
import Header from '../component/header';
import CartComponent from '../component/cartComponent';
import CartList from '../component/cartList';
import Footer from '../component/footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, action } from '../store';

class Cart extends React.Component {
  handleDeleteCart = async transactionId => {
    await store.setState({ transactionDetailId: transactionId });
    await this.props.deleteCart();
    await this.props.history.replace('/users/cart');
  };

  componentDidMount = () => {
    if (this.props.token === null) {
      alert('Sorry, Please Login or Register first!');
      this.props.history.replace('/users/register');
    } else {
      this.props.getCartData();
    }
  };

  render() {
    const cartData = this.props.listCartData.map((item, key) => {
      const transaction = item.transaction_detail;
      const shop = item.cart.shop_id;

      const cartList = transaction.map((data, key) => {
        const product = data.product_id;
        return (
          <CartList
            key={key}
            transactionId={data.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image}
            productQuantity={data.quantity}
          />
        );
      });

      return (
        <CartComponent
          key={key}
          shopName={shop.name}
          listCart={cartList}
          totalItem={item.cart.total_item}
          totalItemPrice={item.cart.total_item_price}
          cartId={item.cart.id}
        />
      );
    });
    return (
      <div className="Cart">
        <Header />
        <div className="container" style={{ marginTop: '20px', marginBottom: '50px' }}>
          <div className="cartTitle" style={{ textAlign: 'center' }}>
            <h2>Welcome to My Cart</h2>
            <p>Let's Check it out and Checkout It!</p>
          </div>
          {cartData}
        </div>
        <Footer />
      </div>
    );
  }
}
export default connect('listCartData, token', action)(withRouter(Cart));
