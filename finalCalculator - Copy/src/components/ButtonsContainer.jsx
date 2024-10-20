import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onBtnClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((buttonName, index) => (
          <button onClick={onBtnClick} key={index} className={styles.btn}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
