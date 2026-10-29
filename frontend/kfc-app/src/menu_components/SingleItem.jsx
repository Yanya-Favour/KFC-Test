import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcart, addcartcount } from '../redux/action'
import styles from "./item.module.css"
import Reccom from './Reccom'
import Beverages from "./Beverages"
import { useNavigate } from 'react-router-dom'
import { getProductImage, handleProductImageError } from '../utils/productImage'
import { API_BASE_URL } from '../utils/api'

const SingleItem = ({_id,image,price,title,desc}) => {
const dispatch = useDispatch();
const [count,setCount]= useState(0)
const [cartItemId,setCartItemId]= useState(null)
const [cartError,setCartError]= useState('')
const navigate= useNavigate()

const addToCart = async () => {
  try {
    setCartError('')
    const { data } = await axios.post(`${API_BASE_URL}/api/productcart/cart`, {
      id: _id, image, price, title, desc, qty: 1
    })
    setCartItemId(data._id)
    setCount(data.qty)
    dispatch(addcart(data))
  } catch {
    setCartError('Could not save this item to the database. Please try again.')
  }
}

const updateCartQuantity = async (nextCount) => {
  try {
    setCartError('')
    const item = { id: _id, image, price, title, desc, qty: nextCount }
    await axios.put(`${API_BASE_URL}/api/productcart/cart/${cartItemId}`, item)
    setCount(nextCount)
    dispatch(addcartcount(item))
    if (nextCount === 0) setCartItemId(null)
  } catch {
    setCartError('Could not update this item in the database. Please try again.')
  }
}

  return (
    <div className={styles.singleupperbox} >

    <div className={styles.mainsinglebox} >
      <img
        src={getProductImage(image, title)}
        alt={title || 'Food item'}
        onError={(event) => handleProductImageError(event, title)}
      />
      <h2>{title}</h2>
      <p className={styles.singledesc} >{desc}</p>
      <p>Calories {Math.round(Math.random()*(2000-1000)+1000)}</p>
      <h2>{price}</h2>
       
        <div className={styles.cartbutton}>
          <h3> {!count?(<p className={styles.addto} onClick={addToCart}> Add to cart</p>):(<div>

              
            <button
            className={styles.minus}
            onClick={()=>updateCartQuantity(count-1)}>&#8211;</button>

            <span>{count}</span>


            <button 
            className={styles.plus}
            onClick={()=>updateCartQuantity(count+1)} >&#43;</button>


           </div>)} </h3>
           <img 
          style={{cursor:"pointer"}}
          onClick={()=>{
            navigate("/cart")
          }} src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"/>
        </div>
        {cartError && <p role="alert">{cartError}</p>}
        <h1 className={styles.pepsi}>You can enjoy this delicious dish with </h1>
        <Beverages/>
    </div>
    <div>
      <Reccom/>
    </div>     

    </div>
  )
}

export default SingleItem