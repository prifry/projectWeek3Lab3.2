import React from "react";
import CustImage from '../CustomImage/CustoImage.js';
import './Home.css';
//Our app will have three pages of content. 
//This content will just be a simple component
// that prints out some JSX.
//import React from 'react';

const Home = () => {
  return (
    <div className="homeimage">
      <h2>Welcome to PigmentWay</h2>
      <CustImage
        src="/images/home.jpg" 
        alt="Priscila Fry"
        className="custom-image2" // Add your custom CSS class for styling.
      />
      <p>Let's Give Life Some Color!</p>
      <p> There are many different color pigments to choose from.</p>
      <p> See all our options in the Products link above.</p>
    </div>
  );
};

export default Home;