import React from "react";
import styles from "./Item.module.css";

const Item = ({ carItem, handleBuyBtn, isSelected }) => {
  return (
    <li
      className={`${styles.carItem} list-group-item ${
        isSelected ? styles.selected : ""
      }`}
    >
      <span className={styles.carName}>{carItem}</span>
      <button
        className={`${styles.btn} btn btn-primary`}
        onClick={handleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
