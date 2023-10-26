import React, { useState, useEffect } from 'react';
import './appfeature.css';
import photo1 from "../../assests/Gotham-Font/Gotham-Font/images/app6.jpeg"
import photo2 from "../../assests/Gotham-Font/Gotham-Font/images/app2.jpeg"
import photo3 from "../../assests/Gotham-Font/Gotham-Font/images/app3.jpeg"
import photo4 from "../../assests/Gotham-Font/Gotham-Font/images/app4.jpeg"
import photo5 from "../../assests/Gotham-Font/Gotham-Font/images/app1.jpeg"
import photo6 from "../../assests/Gotham-Font/Gotham-Font/images/app5.jpeg"
const Appfeature = () => {
  const images = [photo1, photo2, photo3, photo4, photo5,photo6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
    <div className="appfeature-container">
     
      <div className="slideshow-container">
        <div className="slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="app-features">
        <h2>App Features</h2>
        
        <ul>
          <li>
            <span className="tick-mark">&#10003;</span> India's largest marketing platform for Restaurant Industry
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Banner advertisement, reels advertisement.
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Personalize notification for restaurant/cafes and vendors.
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Get the daily updates about your near by restaurant and cafes
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Google maps and near me options are available with filters
          </li>
          <li>
            <span className="tick-mark">&#10003;</span> Download from the link below
          </li>
          {/* <li>
            <span className="tick-mark">&#10003;</span> udiandae saepe eaque optio nulla iste sapiente quo cum recusandae
          </li> */}
          {/* Add more features here */}
        </ul>

        <button className="download-button">Download App Now</button>
      </div>
    </div>
  );
};

export default Appfeature;



