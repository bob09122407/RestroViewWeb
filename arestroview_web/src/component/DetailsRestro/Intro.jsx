import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {FaLocationDot} from 'react-icons/fa6';
import { meal } from '../../constants';
import './Intro.css';
import { useDispatch } from 'react-redux';
import { openGoogleMaps } from '../../actions/nearmeAction';

const Intro = ({videoUrl, name, address, latitude, longitude}) => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const dispatch = useDispatch();

  const handleLocationIconClick = () => {
    if (latitude && longitude) {
      // Dispatch the action to open Google Maps
      dispatch(openGoogleMaps(latitude, longitude));
    } else {
      // Handle the case where latitude or longitude is missing
      alert('Latitude and longitude are missing.');
    }
  };
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={videoUrl}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <div className="app__video-overlay">
        <div className="app__location-icon" onClick={handleLocationIconClick}>
          <FaLocationDot size="40px" color='white'/>
        </div>
        <div className="app__restaurant-info">
          <h1>{name}</h1>
          <p>{address}</p>
          <p>Opening Hours: 9:00 AM - 10:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
