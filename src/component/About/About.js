import React from 'react';
import CustomImage from '../CustomImage/CustoImage.js';
import './About.css';
const About = () => {
  return (
    <div className='homeimage'>
      <h1>About Pigments</h1>
        
        <CustomImage
        src="/images/colorspigm.jpg" 
        alt="Priscila Fry"
        className="about-image2" // Add your custom CSS class for styling.
      />
      <br/>
         <h2>Bringing Color to Life: Your Trusted Pigments Partner</h2>
          <p>At PigmentWay, we believe that color is more than just a visual
             sensation – it's a language that communicates emotions, identities, and stories.
              As a leading innovator in the pigments industry, we're passionate about crafting 
              hues that transform ordinary products into extraordinary experiences. 
          </p>
          <h2>Our Journey: From Inspiration to Creation</h2>
           <p>Founded in 2023, PigmentWay embarked on a journey driven by a relentless pursuit of excellence. With a team of dedicated chemists, artists, and industry experts, we set out to redefine the world of pigments. Our commitment to research, innovation, and quality has allowed us to create a diverse range of pigments that meet the evolving needs of industries spanning from cosmetics to automotive coatings.</p>
          <h2>Quality Beyond Measure</h2>
           <p>Quality is the cornerstone of everything we do. Our state-of-the-art manufacturing facilities adhere to the strictest industry standards, ensuring that every pigment that leaves our labs is vibrant, consistent, and environmentally responsible. We understand that our pigments are more than just colors – they're essential components of your products, contributing to their aesthetics, durability, and performance.</p>
           <CustomImage
        src="/images/colorful.jpg" 
        alt="Priscila Fry"
        className="custom-image" // Add your custom CSS class for styling.
      /> 
        <h2>Pigment History</h2>
        <p>Pigments were produced on a larger scale by the Egyptians and the Chinese. Earth colours were cleaned and washed, increasing their strength and purity, and new pigments appeared from minerals such as malachite, azurite and cinnabar – prized as the first known bright red. Egyptian blue – a blue glass made from sand and copper which was ground into a powder – was first produced around 3000 BC.
            Vegetable dyes were also developed by the Egyptians, who discovered the “lake” making process of producing pigment, the basis of which is still used by Winsor & Newton today to produce Rose Madder Genuine. In China, the brilliant red that came from vermilion was developed 2,000 years before it was used by the Romans.
            Tyrian purple came to signify power and wealth and was 
            used by both the Greeks and the Romans. 
            It was complicated to make,  involving using the 
            mucus from thousands of murex snails, 
            and cost a fortune. The Greeks also manufactured
            white lead, the first fully opaque white – used 
            to make flake white and Cremnitz 
            white – which involved stacking lead strips in a 
            confined space among vinegar and animal dung.
            Nice pigment, not so nice smell.</p>
            <ul>
              <li>Express yourself</li>
              <li>Show your Art with pigments</li>
              <li>Color is life</li>
            </ul>
  
       <p>Images from Unsplach created with Figma</p>
       <p> Priscila Fry Date: August 8, 2023</p>
    </div>
  );
};

export default About;
