import React, { useState } from "react";

function MenuItem({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const resetQuantity = () => {
    setQuantity(0);
    setIsInCart(false);
  };

  const addToCart = () => {
    setIsInCart(true);
  };

  return (
    <li className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <div className="menu-item-details">
        <div className="pizza-info">
          <h3>{item.name}</h3>
          <p>{item.ingredients.join(", ")}</p>
          <p className="price">{item.unitPrice}$</p>
        </div>
        {item.soldOut ? (
          <span>SOLD OUT</span>
        ) : isInCart ? (
          <div>
            <button onClick={decreaseQuantity} disabled={quantity === 0}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
            <button onClick={resetQuantity} disabled={quantity === 0}>
              Delete
            </button>
          </div>
        ) : (
          <button onClick={addToCart}>ADD TO CART</button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
