import React from "react";
import styles from "./Order.module.css";

const Order = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        className={styles.order}
        placeholder="Enter Your Custom Order"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Order;
