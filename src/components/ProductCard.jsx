import React, { useState } from 'react';
import { Card, CardMedia, Typography, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import "./ProductCard.css"

const ProductCard = ({ product, addToCart }) => {

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handleAddToCart = () => {
    if (quantity === 0) {
      return; 
    }
    addToCart({ ...product, quantity });
    setQuantity(0);
  }
  return (
    <Card sx={{ width: 200, padding: '16px' }} className='card-container'>
    <CardMedia component="img" height="180" image={product.image} alt={product.name} sx={{ objectFit: 'contain' }}/>
    <Typography variant="h7">{product.name}</Typography>
    <Typography variant="subtitle1">₹{product.price}</Typography>
    <div className='quantity-counter'>
      <IconButton size="small" onClick={handleDecrement}>
        <Remove />
      </IconButton>
      <Typography variant="body1">{quantity}</Typography>
      <IconButton size="small" onClick={handleIncrement}>
        <Add />
      </IconButton>
    </div>
    <Button variant="contained" color="primary" size="small" onClick={handleAddToCart} disabled={quantity === 0}>
      Add to Cart
    </Button>
  </Card>
  );
};

export default ProductCard;
