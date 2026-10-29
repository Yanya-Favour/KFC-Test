import React, { useEffect, useState } from 'react'
import styles from "./item.module.css"
import { getProductImage, handleProductImageError } from '../utils/productImage'
import { formatUGX } from '../utils/currency'
import { searchMenuItems } from '../utils/menuData'


const Reccom = () => {
    let [recom,setrecom]= useState([]);
    useEffect(()=>{
      searchMenuItems('classic').then(setrecom);
    },[])

  return (
    <div>
      <h2 className={styles.reccomtitle} >Reccomended Meals</h2> 
     {recom.map((el,index)=>{
      return <div key={index} className={styles.recombox} >
              <div>
                <img
                  src={getProductImage(el.image, el.title)}
                  alt={el.title || 'Food item'}
                  onError={(event) => handleProductImageError(event, el.title)}
                />
              </div>
               <div>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
                <h3>{formatUGX(el.price)}</h3>
              </div>
            </div>
       
     })}
       

    </div>
  )
}

export default Reccom