import React, {useState} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import CartPage from './CartPage';

// Styled component for the products container
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
//ViewCart button
const Button = styled.button`
background-color: orange;
color: white;
border: none;
padding: 10px 10px;
border-radius: 4px;
cursor: pointer;
font-size: 14px;
margin-top: 10px;
margin-left: 10px;

`;

// Sample product data
const productsData = [
  {
    id: 1,
    name: 'Scarlet ',
    description: ' 1lb',
    price: 42.00,
    imageUrl:'./images/product1.jpg',
  },
  {
    id: 2,
    name: 'Viola',
    description: '1lb',
    price: 42.00,
    imageUrl:'./images/product2.jpg',
  },
  {
   id: 3,
   name: 'Silver Ash',
   description: '1lb',
   price: 29.99,
   imageUrl:'./images/product3.jpg',
 },
 {
  id: 4,
  name: 'Terracia',
  description: '1lb',
  price: 48.00,
  imageUrl:'./images/product4.jpg',
},
{
 id: 5,
 name: 'Tumeric Gols',
 description: '1lb',
 price: 69.99,
 imageUrl:'./images/product5.jpg',
},
{
 id: 6,
 name: 'Persian Green',
 description: '1lb',
 price: 42.99,
 imageUrl:'./images/product6.jpg',
},
  // Add more products here
];

const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

   // Find the index of the existing item in the cart
  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
     // If the item exists in the cart, update its quantity
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);// Update the cart items with the new quantity
    } else {   // If the item is not in the cart, add it as a new item with the provided quantity
      const newItem = { ...product, quantity };
      setCartItems([...cartItems, newItem]);// Add the new item to the cart items
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleBackToProducts = () => {
    setShowCart(false);
  };

  return (
    
    <div>
    <h1>Welcome to our Pigments</h1>
    <p>Shipping is not yet included in the price.</p>
    <p><strong>Add as many as you like!</strong></p>
    <ProductsContainer>
      {productsData.map((product) => (
         // Render each product using the ProductCard component and pass the  functions
        <ProductCard key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} isIncart={cartItems.some(item => item.id === product.id)}/>
      ))}
    </ProductsContainer>
    <Button onClick={handleViewCart}>View Cart</Button>

    {showCart && (
      <CartPage cartItems={cartItems} onBackToProducts={handleBackToProducts} removeFromCart={removeFromCart} handleRefreshCart={() => setCartItems([])}/>
    )}
  </div>
);
};

export default ProductsPage;