import React from 'react';
import './team.css';
import bobby from '../../assests/Gotham-Font/Gotham-Font/images/bobby.jpeg';
import vrunda from '../../assests/Gotham-Font/Gotham-Font/images/vrunda.jpeg';
import aditya from '../../assests/Gotham-Font/Gotham-Font/images/aditya.jpeg';

const Team = () => {
  return (
    <div className="crausel-container">
    
    <div className="box">
       
      <div style={{ '--v': 1 }}>
        <img src={bobby} alt="Bobby" />
        <p>Bobby Upreti<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 2 }}>
        <img src={bobby} alt="Vrunda" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 3 }}>
        <img src={aditya} alt="Aditya" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 4 }}>
        <img src={bobby} alt="Bobby" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 5 }}>
        <img src={aditya} alt="Vrunda" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 6 }}>
        <img src={aditya} alt="Vrunda" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 7 }}>
        <img src={aditya} alt="Vrunda" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
      <div style={{ '--v': 8 }}>
        <img src={aditya} alt="Vrunda" />
        <p>Bobby<br></br><span>WebDeveloper</span></p>
      </div>
    
     
    </div>
    </div>
  );
};

export default Team;


