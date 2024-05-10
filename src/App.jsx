
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Product from './Components/Product/Product';

const App = () => {
  const [cart, setCart] = useState([]);
  // const [removecart, setRemoveCart] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1); 
  };
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
    setCartCount(cartCount - 1); // Update the cart count
  };

  const [cartCount, setCartCount] = useState(0); // State to track the cart count

  

  const products = [
    { id: 1, name: 'Fancy Product 1', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
    { id: 2, name: 'Fancy Product 2', price: '$50.00 - $90.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
    { id: 3, name: 'Fancy Product 3', price: '$60.00 - $100.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' }
  ];

  return (
    <div>
      <Header cartCount={cartCount}/>
      <Product products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
      <Footer />
    </div>
  );
};

export default App;
