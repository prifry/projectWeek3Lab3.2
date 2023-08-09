import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


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
  return (
    <div>
      <h1>Welcome to our Pigments</h1>
      <p>*Shipping will be calculated after you add your address.</p>
      <ProductsContainer>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsPage;