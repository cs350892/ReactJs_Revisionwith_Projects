import Item from "./Item";

function CarList({ items }) {
  // let carItem = [];
  // let carItems = ["maruti", "toyota", "bmw", "rollsc royace"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} carItem={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default CarList;
