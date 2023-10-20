import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './foods.json'; // Replace with your animation file
import './landing.css'; // Add your styles
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import React Icons

const TypingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = 'Welcome to RestroView';
    let index = 0;
    let loopInterval;

    const typeText = () => {
      if (textRef.current) {
        textRef.current.textContent = text.slice(0, index);
      }
      index++;

      if (index <= text.length) {
        loopInterval = setTimeout(typeText, 100); // Adjust typing speed here
      } else {
        // Restart the typing animation after a delay (e.g., 1000ms)
        setTimeout(() => {
          index = 0;
          loopInterval = setTimeout(typeText, 100);
        }, 1000); // Adjust the delay before restarting the animation
      }
    };

    // Start the typing animation
    loopInterval = setTimeout(typeText, 1000); // Initial delay before starting the animation

    // Cleanup and clear the loopInterval when the component unmounts
    return () => {
      clearTimeout(loopInterval);
    };
  }, []);

  return <span ref={textRef}></span>;
};

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
          <span className="welcome-text">
            <TypingText />
          </span>
          <span className="random_text">a</span>
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
          <p className="subtitle">Your Destination for Delicious Food</p>
      <a href="/home" className="explore-button">
        Explore
      </a>
        </div>
      </div>
      <div className="lottie-container" ref={animationContainerRef}></div>
     
    </div>
  );
};

export default LandingPage;
