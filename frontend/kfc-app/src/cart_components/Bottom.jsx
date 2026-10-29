import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../menu_components/Item";
import { searchMenuItems } from "../utils/menuData";
import styles from "./cart.module.css";
const Bottom = () => {
  let [recom, setrecom] = useState([]);
  useEffect(() => {
    searchMenuItems('meal').then(setrecom);
  }, []);

  return (
    <>
      <h2>Top Recommended Meals</h2>
      <div className={styles.toprecom}>
        {recom.map((el, index) => {
          return <Item key={index} {...el} />;
        })}
      </div>
    </>
  );
};

export default Bottom;
