import React from 'react';
import "./incard.css";

const InCard = (props) => {
  const { name, jobTitle, followers, open, post, imageSrc } = props;

  return (
    <div className="cardin" style={{ margin: '25px' }}>
      <div className="imgBxin">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="contentin">
        <div className="detailsin">
          <h2>
            {name}<br></br><span>{jobTitle}</span>
          </h2>
          <div className="data">
            <h3>{followers}<br></br><span>Followers</span></h3>
            <h3>{open}<br></br><span>Open</span></h3>
            <h3>{post}<br></br><span>Post</span></h3>
          </div>
          <div className="actionbtn">
            <button>Follow</button>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InCard;

