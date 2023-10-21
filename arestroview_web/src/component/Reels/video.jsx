// src/components/Video.js
import React, { useRef, useEffect } from 'react';
import './reels.css'; // Import the CSS file for styling
import { BiHomeAlt} from 'react-icons/bi';
import { AiOutlineHeart} from 'react-icons/ai';

const Video = ({ src, isActive, username, likes, shares }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className={`video ${isActive ? 'active' : ''}`}>
      <video autoPlay loop controls ref={videoRef}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
    </div>
  );
};

export default Video;



