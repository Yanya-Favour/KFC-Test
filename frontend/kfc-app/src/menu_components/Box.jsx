
import { addbox } from '../redux/action';
import { getMenuItems } from "../utils/menuData"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';

const Box = () => {
    const dispatch = useDispatch();
    const box=useSelector((state)=>state.box);
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getMenuItems("boxmeals");
         dispatch(addbox(payload));
     }


  return (
  <div id="box" >
    <h1>BOX MEALS</h1>
   <div className={styles.itembox} >
    {box.map((el)=>{
      return <Item {...el} key={el._id}  />
    })}
   </div>
  </div>
  )
}

export default Box