import React, { useState } from 'react';
import styles from "./item.module.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { getProductImage, handleProductImageError } from '../utils/productImage';
import { formatUGX } from '../utils/currency';
import { API_BASE_URL } from '../utils/api';

const Item = ({ _id, image, price, title, desc }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [hasAdded, setHasAdded] = useState(false);
  const [addError, setAddError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    setIsAdding(true);
    setAddError('');

    try {
      const item = { id: _id, image, price, title, desc, qty: 1 };
      const { data } = await axios.post(
        `${API_BASE_URL}/api/productcart/cart`,
        item
      );
      dispatch(addcart(data));
      setHasAdded(true);
    } catch (error) {
      setAddError('Could not save this item to the database. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className={styles.innerbox}>
      <img
        onClick={() => navigate(`/menu/${_id}`)}
        style={{ cursor: 'pointer' }}
        src={getProductImage(image, title)}
        alt={title} 
        onError={(event) => handleProductImageError(event, title)}
      />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p>
          <span style={{ fontSize: "11px", background: "red", color: "white" }}>
            ⭐ 4.5
          </span>
        </p>
        <h3>{formatUGX(price)}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.cartbutton}>
          <button onClick={handleAddToCart} disabled={isAdding}>
            {isAdding ? 'Adding...' : hasAdded ? 'Add another' : 'Add to cart'}
          </button>
        </div>
        {addError && <p role="alert">{addError}</p>}
      </div>
    </div>
  );
};

export default Item;