import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import CarList from "./components/CarList";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import Order from "./components/Order";
import { useState } from "react";

function App() {
  let [carItem, setCarItem] = useState([]);
  let [textToShow, setTextToShow] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [selectedItem, setSelectedItem] = useState(null);

  const handleBuyButton = (index) => {
    setSelectedItem(index); // Update selected item index
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCarItem = event.target.value.trim();
      if (newCarItem === "") {
        setErrorMsg("Error: Input cannot be empty.");
      } else {
        setErrorMsg("");
        let newCar = [...carItem, newCarItem];
        event.target.value = "";
        setCarItem(newCar);
      }
    }
  };

  return (
    <Container>
      <AppName />
      <Order handleKeyDown={handleKeyDown} />
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <p>{textToShow}</p>
      <CarList
        items={carItem}
        handleBuyButton={handleBuyButton}
        selectedItem={selectedItem}
      />
      <ErrorMsg items={carItem} />
    </Container>
  );
}

export default App;
