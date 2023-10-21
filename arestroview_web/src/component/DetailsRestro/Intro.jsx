import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {FaLocationDot} from 'react-icons/fa6';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <div className="app__video-overlay">
        <div className="app__location-icon">
          <FaLocationDot size="40px" color='white'/>
        </div>
        <div className="app__restaurant-info">
          <h1>Restaurant Name</h1>
          <p>Restaurant Address</p>
          <p>Opening Hours: 9:00 AM - 10:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
