import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from "../redux/action";
import { getdata } from "../utils/getdata";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cartproduct from './Cartproduct';
import { API_BASE_URL } from "../utils/api";


const Leftside = () => {
    const dispatch = useDispatch()
    const cart= useSelector((state)=>state.cart);
    const [loadError, setLoadError] = useState("");
    
    const fetchdata = useCallback(async () => {
      try {
        const payload = await getdata(`${API_BASE_URL}/api/productcart/cart`);
        if (!Array.isArray(payload)) {
          throw new TypeError("Cart response must be an array");
        }
        dispatch(getCart(payload));
        setLoadError("");
      } catch {
        dispatch(getCart([]));
        setLoadError("Cart data could not be loaded from the database.");
      }
    }, [dispatch]);

    useEffect(() => {
      fetchdata();
    }, [fetchdata]);

  return (
    <div>
        {loadError && <p role="alert">{loadError}</p>}
        {cart.map((el,index)=>{
            return <Cartproduct key={index}  {...el} fetchData={fetchdata} />
        })}
    </div>
  )
}

export default Leftside