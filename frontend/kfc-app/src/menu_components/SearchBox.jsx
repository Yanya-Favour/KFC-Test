import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./item.module.css";

const SearchBox = () => {
const [searchval,setSearchval]= useState("");
const navigate= useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = searchval.trim();
    if (query) navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className={styles.searchbox}>
      <form className={styles.searchform} onSubmit={handleSubmit}>
       <input type="text" 
       value={searchval} 
       placeholder="Search Our Menu"
       aria-label="Search menu items"
       onChange={(e)=>setSearchval(e.target.value)}
       />
       <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBox