import React, {useState} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import CartPage from './CartPage';

// Styled component for the products container
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
background-color: orange;
color: white;
border: none;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
font-size: 14px;
margin-top: 10px;
width: 100px;
height: 30px:
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
    // State to manage the cart items and cart visibility
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

 // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    const item = { ...product, quantity };
    setCartItems([...cartItems, item]);
  };

  // Function to show the cart and scroll to it
  const handleViewCart = () => {
    setShowCart(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

    // Function to go back to the products listing and scroll to the top
  const handleBackToProducts = () => {
    setShowCart(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <div>
    <h1>Welcome to our Pigments</h1>
    <p>Shipping is not yet included in the price.</p>
    <ProductsContainer>
      {productsData.map((product) => (
         // Render each product using the ProductCard component and pass the addToCart function
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ProductsContainer>
    <Button onClick={handleViewCart}>View Cart</Button>

    {showCart && (
      <CartPage cartItems={cartItems} onBackToProducts={handleBackToProducts} />
    )}
  </div>
);
};

export default ProductsPage;