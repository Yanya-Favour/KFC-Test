import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import SingleItem from '../menu_components/SingleItem';
import { API_BASE_URL } from '../utils/api';


const SingleProduct = () => {
    const {id}= useParams();
    const [single,setsingle]= useState([]);
    useEffect(()=>{
      axios.get(`${API_BASE_URL}/api/product/menu/${id}`)
      .then(({data})=>{
        setsingle(data)
      })
    },[])
    
  return (
    <div style={{marginTop:"70px",marginBottom:"70px"}} >
       {single.map((el,index)=>{
        return <SingleItem key={index} {...el}/>
       })}
    </div>
  )
}

export default SingleProduct