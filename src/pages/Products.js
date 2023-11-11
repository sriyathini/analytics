import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../action/cartAction';
// import { Link } from 'react-router-dom';
import '../Style.css';
// import Cart from './Cart';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return (
    <div>
      <h1>Products</h1>
      {/* <Link to="/cart" className='cart-link'>Go to Cart</Link> */}
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <span className="product-name">{product.name}</span><br />
              <span className="product-price">₹{product.price}</span><br />
              <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;