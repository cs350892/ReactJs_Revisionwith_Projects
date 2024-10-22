import Item from "./Item";

function CarList({ items, handleBuyButton, selectedItem }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          carItem={item}
          handleBuyBtn={() => handleBuyButton(index)}
          isSelected={selectedItem === index}
        />
      ))}
    </ul>
  );
}

export default CarList;
