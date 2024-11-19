// src/components/Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveClick = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!!!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  min="1"
                />
                <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
                <p>Total: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

