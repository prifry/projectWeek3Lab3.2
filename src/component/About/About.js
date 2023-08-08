import React from 'react';
import CustomImage from '../CustomImage/CustoImage.js';
import './About.css';
const About = () => {
  return (
    <div className='homeimage'>
      <h1>About Priscila</h1>
        <p>Priscila is a Software developer Student at ECPI. </p>
        <ul>
          <li>Disciplined</li>
          <li>Organized</li>
          <li>Adapt to changes</li>
        </ul>
      <CustomImage
        src="/images/unsplash_computer.jpg" 
        alt="Priscila Fry"
        className="custom-image" // Add your custom CSS class for styling.
      />
       <p>Images from Unsplach created with Figma</p>
       <p>Date: August 1, 2023</p>
    </div>
  );
};

export default About;
