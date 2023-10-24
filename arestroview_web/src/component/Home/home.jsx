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
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
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
    <Team/>

    </div>
    <Faqs faqsList={faqsList} />
   
    </div>
  );
};

export default Home;


