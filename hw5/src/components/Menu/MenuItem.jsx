import React from "react";
import Button from "../Button/Button";

function MenuItem({ item }) {
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
        ) : (
          <Button
            text="ADD TO CART"
            handleButton={() => console.log("Added to cart")}
          />
        )}
      </div>
    </li>
  );
}

export default MenuItem;
