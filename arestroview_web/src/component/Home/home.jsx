import React from "react";
import Slideshow from "../Slideshow/slideshow.jsx";
import Team from '../Team/team.jsx';
import Restaurant from "../NearByRestro/restaurant.jsx";
import './home.css';
import Cafes from "../NearByRestro/cafes.jsx";
import Banner from "../banner/banner.jsx";
import Slideshowcafe from "../Slideshow/slideshowcafe.jsx";
const Home = () => {


  return (
    <div className="main">
      <div className="container10">
        <div className="slide1">
        
          <Slideshow/>
          <h2 className="slide-heading">Restaurant</h2>
        </div>
        <div className="slide2">
          
         <Slideshowcafe />
          <h2 className="slide-heading">Cafe</h2>
        </div>
      </div>
    
      <Restaurant/>
      <Banner/>
     <Cafes/>
     <Banner/> 
      {/* /*isko component banana hai props pass karke use kar paaye aisa*/}
    
     {/* <Team/> */}
    </div>
  );
};

export default Home;


