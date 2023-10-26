import React from "react";
import Slideshow from "../Slideshow/slideshow.jsx";
import Team from '../Team/team.jsx';
import Restaurant from "../NearByRestro/restaurant.jsx";
import './home.css';
import Cafes from "../NearByRestro/cafes.jsx";
import Banner from "../banner/banner.jsx";
import Slideshowcafe from "../Slideshow/slideshowcafe.jsx";
import Appfeature from "../AppFeature/appfeature.jsx";
import Faqs from "../Faqs/index.js";

const faqsList = [
  {
    id: 0,
    questionText: 'Who are we?',
    answerText:
      'We are team RestroView who wants to make a indias largest marketing platform for the restaurant industry',
  },
  {
    id: 1,
    questionText: 'What it includes',
    answerText:
      'The banner advertisement, reel advertisements and special personalize notification features at a one place',
  },
  {
    id: 2,
    questionText:
      'When our application will launch',
    answerText:
      'Within 3-4 months',
  },
  {
    id: 3,
    questionText: 'Why to choose us',
    answerText:
      'Indias most trusted platform',
  },
]
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
    <Appfeature/>
    <div className="team-main">
    {/* <Team/> */}

    </div>
    <Faqs faqsList={faqsList} />
   
    </div>
  );
};

export default Home;


