import React from 'react';
import styled from 'styled-components';


// Styled component for the cart container
const CartContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
`;
// Styled component for the "Back to Products" button
const BackToProductsButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  position:right;
  float: right;
`;
const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
`;

const RefreshButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
`;

const CartPage = ({ cartItems, onBackToProducts, removeFromCart, handleRefreshCart }) => {
    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  return (
    <div>
    <CartContainer>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => ( // This is a JSX expression that uses the map function to iterate over each item in the cartItems array. The index value to help React efficiently update and render the list.{item.name}: This displays the name of the product in the cart item.
          <li key={index}>  
            {item.name} - Quantity: {item.quantity} - Total Price: ${(item.price * item.quantity).toFixed(2)}
            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <br/>
      <RefreshButton onClick={handleRefreshCart}>Refresh Cart</RefreshButton>
      <BackToProductsButton onClick={onBackToProducts}>Back to Products</BackToProductsButton>
    </CartContainer>
    </div>
  );
};

export default CartPage;