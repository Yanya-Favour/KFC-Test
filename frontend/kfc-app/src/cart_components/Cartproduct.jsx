import React, { useState } from 'react';
import styles from './cart.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addcartcount, getCart } from '../redux/action';
import { getProductImage, handleProductImageError } from '../utils/productImage';
import { formatUGX } from '../utils/currency';
import { API_BASE_URL } from '../utils/api';

const Cartproduct = ({ desc, id, image, price, qty, title, _id, fetchData }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(qty);
  const [error, setError] = useState('');

  let acprice = Number(String(price).replace(/[^0-9.]/g, '')) || 0;

  const handleRemove = async () => {
    try {
      setError('');
      await axios.delete(`${API_BASE_URL}/api/productcart/cart/${_id}`);
      fetchData();
    } catch {
      setError('Could not remove this item from the database.');
    }
  };

  const updateQuantity = async (newQty) => {
    const el = { id, image, price, title, desc, qty: newQty };
    try {
      setError('');
      await axios.put(`${API_BASE_URL}/api/productcart/cart/${_id}`, el);
      setCount(newQty);
      dispatch(addcartcount(el));
      if (typeof fetchData === 'function') fetchData();
    } catch {
      setError('Could not update this item in the database.');
    }
  };

  return (
    <div className={styles.cartproductmain}>
      <div className={styles.cartproductleft}>
        <img
          src={getProductImage(image, title)}
          alt={title || 'Food item'}
          onError={(event) => handleProductImageError(event, title)}
        />

        <div>
          <h3>{title}</h3>
          <ul>
            <li>{desc}</li>
          </ul>
          <h3 style={{ cursor: 'pointer', color: 'red' }} onClick={handleRemove}>
            Remove
          </h3>
          {error && <p role="alert">{error}</p>}
        </div>
      </div>
      <div className={styles.cartproductright}>
        <button disabled={count <= 1} onClick={() => updateQuantity(count - 1)}>
          –
        </button>
        <h4>{count}</h4>
        <button onClick={() => updateQuantity(count + 1)}>+</button>
        <h3>{formatUGX(Math.round(acprice * count))}</h3>
      </div>
    </div>
  );
};

export default Cartproduct;
