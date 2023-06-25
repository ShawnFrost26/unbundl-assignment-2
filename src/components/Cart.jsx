import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Cart.css'

const Cart = ({ cartItems }) => {
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Card sx={{ width: 250 }} className='cart-card'>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Cart
        </Typography>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2">
                Quantity: {item.quantity} | Price: ₹{item.price * item.quantity}
              </Typography>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <Typography variant="subtitle1">
            Total Items: {getTotalQuantity()}
          </Typography>
          <Typography variant="subtitle1">
            Total Price: ₹{getTotalPrice()}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;