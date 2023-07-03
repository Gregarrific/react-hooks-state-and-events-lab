import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);
  const inCartClass = inCart ? "in-cart" : "";
  const cartBtnText = inCart ? "Remove From Cart" : "Add to Cart";

  function handleCart() {
    setCart(inCart => !inCart);
  }
  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartBtnText}</button>
    </li>
  );
}

export default Item;