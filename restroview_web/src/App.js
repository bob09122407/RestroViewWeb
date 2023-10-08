import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./component/Layout/Navbar/navbar.jsx";
// import Reels from "./component/Reels/reels.jsx";
// import Loading from './component/Loading/loading.jsx';
import SplashScreen from "./component/splash/splash.jsx";
// import LandingPage from "./Screens/LandingPage/landing.jsx";
// import Card from "./cardUI/card.jsx";
import Home from "./component/Home/home.jsx";
import Footer from "./component/Layout/Footer/footer.jsx";
// import Signup from "./component/users/Register/register.jsx";
import Filter from "./component/InsideRestro/inrestro.jsx";
// import Incard from "./cardUI/incard.jsx";
import Detailsrestro from "./Screens/LandingPage/DetailsRestro/detailsrestro.jsx";
import Intro from "./Screens/LandingPage/DetailsRestro/detailsrestro.jsx";
const App = () => {
  return (
    <Router>
      {/* <NavbarConditionally /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<SplashScreen />} />
        <Route path="/vendors" element={<Detailsrestro />} />
        <Route path="/portfolio" element={<Intro/>} />
        <Route path="/signup" element={<Filter />} />    {/*filter mein raring filter add karna hai*/}
      </Routes>
      <FooterConditionally />
    </Router>
  );
};

const FooterConditionally = () => {
  const location = useLocation();

  // Check if the current location is "/reels" and conditionally render the footer
  if (location.pathname === "/") {
    return null; // Don't render the footer on the "/reels" route
  }

  return <Footer />;
};
// const NavbarConditionally = () => {
//   const location = useLocation();


//   if (location.pathname === "/reels") {
//     return null; 
//   }

//   return <Navbar />;
// };

export default App;
