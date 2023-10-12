import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Layout/Navbar/navbar.jsx";
import Reels from "./component/Reels/reels.jsx";
import Loading from './component/Loading/loading.jsx';
import SplashScreen from "./component/splash/splash.jsx";
import LandingPage from "./Screens/LandingPage/landing.jsx";
import Home from "./component/Home/home.jsx";
import Footer from "./component/Layout/Footer/footer.jsx";
import Signup from "./component/users/Register/register.jsx";
import Filter from "./component/InsideRestro/inrestro.jsx";
import Vendors from "./Screens/LandingPage/Vendors/vendors.jsx";
import Detailsrestro from "./Screens/LandingPage/DetailsRestro/detailsrestro.jsx";


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Automatically hide the splash screen after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <NavbarConditionally />
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/restrodetails" element={<Detailsrestro />} />
            <Route path="/filters" element={<Filter />} />
          </Routes>
          <FooterConditionally />
        </>
      )}
    </Router>
  );
};

const FooterConditionally = () => {
  const location = useLocation();

  if (location.pathname === "/reels") {
    return null;
  }

  return <Footer />;
};

const NavbarConditionally = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <Navbar />;
};

export default App;
