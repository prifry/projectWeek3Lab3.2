import React from 'react';
import { Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Contact from './component/Contact/contact.js';


const Main = () => {
  
      return (
    <HashRouter>
    <div>
      
        
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
         
      <div className='content'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
          {/* Add other routes as needed */}
     </Routes>
     </div>
    </div>   
   </HashRouter>
  );
   
};

export default Main;

//For each Navlink, pay attention to the URL we are telling our router to navigate to. This URL value (defined by the to prop) 
//acts as an identifier to ensure the right content gets loaded. 