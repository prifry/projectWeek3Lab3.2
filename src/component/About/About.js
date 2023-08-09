import React from 'react';
import CustomImage from '../CustomImage/CustoImage.js';
import './About.css';
const About = () => {
  return (
    <div className='homeimage'>
      <h1>About Pigments</h1>
        <h2>This is a mock-up company for my ECPI project.</h2>
        <CustomImage
        src="/images/colorspigm.jpg" 
        alt="Priscila Fry"
        className="about-image2" // Add your custom CSS class for styling.
      />
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
      <CustomImage
        src="/images/colorful.jpg" 
        alt="Priscila Fry"
        className="custom-image" // Add your custom CSS class for styling.
      />
       <p>Images from Unsplach created with Figma</p>
       <p> Priscila Fry Date: August 8, 2023</p>
    </div>
  );
};

export default About;
