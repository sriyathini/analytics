import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../action/cartAction';
import '../Style.css'; 
import { Link } from 'react-router-dom';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  
    const handleIncrement = (productId) => {
      dispatch(incrementQuantity(productId));
    }
  
    const handleDecrement = (productId) => {
      dispatch(decrementQuantity(productId));
    }
  
    const calculateProductTotal = (item) => {
      return item.price * item.quantity;
    }
  
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  
    return (
        <div>
          <h1>Cart</h1>
          <Link to="/" className='product-link'>Go back to Products</Link>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <span className="cart-name">{item.name}</span><br />
                  <span className="cart-price">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleDecrement(item.id)}>-</button><br />
                  <div className="cart-total"> ₹{calculateProductTotal(item)}</div>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ₹{calculateTotal()}</h2>
        </div>
    );
}

export default Cart;