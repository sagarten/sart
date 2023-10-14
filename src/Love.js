import React from 'react';
import './Writing.css';
import image from './image/client.jpg';

const Love = () => {
  return (
    <div className="lovehead">
      <div className="text-container">
        <h1>Testimonials</h1>
        <div className="title-container">
          <h2 className="txtblc">Our Clients </h2>
          <h2 className="txtblue"> Love Us</h2>
          
        </div>
        <div><p className='pa'>Here are what some of our amazing customers are saying about our marketing professionals.</p></div>
        <div className="undtxt">
          <p>
            "Duis aute inure dolor in reprehendent in voluporuisy esse cillum ffdyee cupls csg official"
          </p>
        </div>
        <h1 className="tctb">Charlotte Halie</h1>
        <p>CEO, India</p>
      </div>
      <div className="image-container">
        <img src={image} alt="image" width="840" height="450" className="imageloveclient" />
      </div>
    </div>
  );
};

export default Love;
