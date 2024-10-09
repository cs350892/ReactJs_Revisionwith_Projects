import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppNAme";
import CarList from "./components/CarList";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let carItem = ["maruti", "toyota", "bmw", "rollsc royace", "Thar"];

  return (
    <>
      <AppName></AppName>
      <CarList items={carItem}></CarList>
      <ErrorMsg items={carItem}></ErrorMsg>
    </>
  );
}
export default App;
