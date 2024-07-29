import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.unitPrice}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncrement(item.id)}>+</button>
          <button onClick={() => handleDecrement(item.id)}>-</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      {items.length > 0 && <button onClick={handleClear}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
