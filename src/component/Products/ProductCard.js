import React,  { useState } from 'react';
import styled from 'styled-components';

// Styled component for the product card container
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
// Styled component for the product title
const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
// Styled component for the product price
const Price = styled.span`
  font-weight: bold;
`;
// Styled component for the product image
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 200x;
  height: 150px;
  flex-shrink: 0;
  text-align: center;
  width: 100px;
  margin: auto;
  display: block;
`;
// Styled component for the "Add to Cart" button
const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
// Styled component for the quantity input
const QuantityInput = styled.input`
padding: 8px;
width: 50px;
border: 1px solid #ccc;
border-radius: 4px;
margin-right: 10px;

`;

const ProductCard = ({ product }) => {
    // State to track the selected option and quantity
   const [quantity, setQuantity] = useState(1);
   // Function to handle quantity input change 
   const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
};
   // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${quantity} ${product.name} to cart.`);
};

  return (
    <Card>
      <Image src={product.imageUrl} alt={product.name} />
      <Title>{product.name}</Title>
      <p>{product.description}</p>
      <Price>${product.price}</Price>
      <QuantityInput
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </Card>
  );
};

export default ProductCard;