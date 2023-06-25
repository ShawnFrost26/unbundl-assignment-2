import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./ManageBundle.css";

const ManageBundle = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.name === product.name
    );
    if (existingProduct) {
      const updatedCart = cartItems.map((item) => {
        if (item.name === product.name) {
          return { ...item, quantity: item.quantity + product.quantity };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      if (cartItems.length < 8) {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
      } else {
        alert("Maximum limit of 8 different products reached!");
      }
    }
  };

  return (
    <div className="manage-bundle">
      <div className="product-list-container">
        <ProductList addToCart={addToCart} />
      </div>
      <div className="cart-container">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default ManageBundle;
