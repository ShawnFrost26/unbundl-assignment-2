import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

const ProductList = ({ addToCart }) => {
  const products = [
    {
      name: 'Dairy Milk Silk Bubbly',
      image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/v/d/l/52-dairy-milk-silk-bubbly-chocolate-1-cadbury-original-imagmar8hd2cvkmz.jpeg?q=70',
      price: 150,
    },
    {
      name: 'Dairy Milk Silk Oreo',
      image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/t/a/3/-original-imaghqdbzh2qeemq.jpeg?q=70',
      price: 80,
    },
    {
      name: 'Bournville Cranberry',
      image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/s/u/x/-original-imagj5w9huh6xkue.jpeg?q=70',
      price: 100,
    },
    {
      name: 'GALAXY Milk',
      image: 'https://rukminim1.flixcart.com/image/612/612/kzogn0w0/chocolate/s/z/p/208-milk-chocolate-with-fruit-nut-52g-pack-of-4-4x52g-4-galaxy-original-imagbmx3tzkxnnpx.jpeg?q=70',
      price: 80,
    },
    {
      name: `Sugarfree D'lite`,
      image: 'https://rukminim1.flixcart.com/image/612/612/l5fnhjk0/chocolate/t/v/u/-original-imagg3ty67gnt6ku.jpeg?q=70',
      price: 180,
    },
    {
      name: `Perk`,
      image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/chocolate/j/o/v/-original-imagzufqwa7nyhhd.jpeg?q=70',
      price: 180,
    },
    {
      name: `Cadbury Fuse`,
      image: 'https://m.media-amazon.com/images/I/713JP56Ox0L._AC_UL600_FMwebp_QL65_.jpg',
      price: 96,
    },
    {
      name: `Fabelle Rocky Road`,
      image: 'https://m.media-amazon.com/images/I/81JqI+-1YYL._AC_UL600_FMwebp_QL65_.jpg',
      price: 325,
    },
    {
      name: `Nestle Munch`,
      image: 'https://m.media-amazon.com/images/I/71uHoLv15iL._AC_UL600_FMwebp_QL65_.jpg',
      price: 325,
    },
    {
      name: `Amul Dark Chocolate`,
      image: 'https://m.media-amazon.com/images/I/41XQL-1sVTS._AC_UL600_FMwebp_QL65_.jpg',
      price: 325,
    },
    
  ];

  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product}  addToCart={addToCart}/>
      ))}
    </div>
  );
};

export default ProductList;
