import React from 'react';
import "./incard.css";
import {Link} from "react-router-dom";
const InCard = (props) => {
  const { name, jobTitle, followers, open, post, imageSrc,Id } = props;

  return (
    <div className="cardin" style={{ margin: '25px' }}>
      <div className="imgBxin">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="contentin">
        <div className="detailsin">
          <span>
            {name}<br></br><span>{jobTitle}</span>
          </span>
          <div className="data">
            <span>{followers}<br></br><span>Followers</span></span>
            <span>{open}<br></br><span>Open</span></span>
            {/* <span>{post}<br></br><span>Post</span></span> */}
          </div>
          <div className="actionbtn">
            <button>Follow</button>
            <button><Link to={`/detailrestaurants/${Id}`}>Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InCard;

