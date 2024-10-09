function ErrorMsg({ items }) {
  return <>{items.length == 0 && <h3>Cars are Out of Stock</h3>}</>;
}

export default ErrorMsg;
