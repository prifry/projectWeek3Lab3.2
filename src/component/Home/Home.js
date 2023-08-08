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
      <h2>Welcome to Prifry Single Page React</h2>
      <CustImage
        src="/images/unsplash_react.jpg" 
        alt="Priscila Fry"
        className="custom-image2" // Add your custom CSS class for styling.
      />
      <p>A Single Page Application (SPA) built with React is a web application that operates within a single web page, meaning that when a user interacts with the application, the content dynamically changes on the page without the need for a full page reload. React is a popular JavaScript library developed by Facebook for building user interfaces and is commonly used for creating SPAs.</p>
    </div>
  );
};

export default Home;