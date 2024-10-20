import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onBtnClick = (event) => {
    const clickedButtonValue = event.target.innerText;

    if (clickedButtonValue === "C") {
      setCalVal(""); // Clear the display when "C" is clicked
    } else if (clickedButtonValue === "=") {
      try {
        const result = eval(calVal); 
        setCalVal(result.toString()); // Update state with the result
      } catch {
        setCalVal("Error"); 
      }
    } else {
      const newDisplayVal = calVal + clickedButtonValue;
      setCalVal(newDisplayVal); // Update state to include the clicked button value
    }
  };

  return (
    <>
      <div className={styles.Heading}>
        <h1>Calculator</h1>
        <Display displayVal={calVal}></Display>
        <ButtonsContainer onBtnClick={onBtnClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
