import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <>
      <li className={`${styles.carItem} list-group-item `}>
        <span className={styles.carName}>{props.carItem}</span>
      </li>
    </>
  );
};
export default Item;
