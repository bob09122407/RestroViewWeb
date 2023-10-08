import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './foods.json'; // Replace with your animation file
import './landing.css'; // Add your styles
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import React Icons

const LandingPage = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      const animation = Lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: 'svg', // Use 'svg' renderer for better control
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      // Cleanup when the component unmounts
      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (

    <div className="landing-container gradient-circle">
    <div className="content-container">
      <div className="left-content">
        <h1 className="welcome-text">
         <TypingText/>
        </h1>
        
        <p className="tagline">We serve what you deserve</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <FaInstagram />
          </a>
          <a href="#" className="icon">
            <FaYoutube />
          </a>
          <a href="#" className="icon">
            <FaFacebook />
          </a>
        </div>
      </div>
      <p className="subtitle">Your Destination for Delicious Food</p>
      <a href="#" className="explore-button">
        Explore
      </a>
    </div>
    <div className="lottie-container" ref={animationContainerRef}></div>
  </div>
  
    );
};

const TypingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = 'Welcome to RestroView';
    let index = 0;

    const typeText = () => {
      if (textRef.current) { // Check if textRef.current exists
        textRef.current.textContent = text.slice(0, index);
      }
      index++;

      if (index <= text.length) {
        setTimeout(typeText, 100); // Adjust typing speed here
      }
    };

    setTimeout(typeText, 1000); // Delay the typing effect by 1 second
  }, []);

  return <span ref={textRef}></span>;
};


export default LandingPage;
