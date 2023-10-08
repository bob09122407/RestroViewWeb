import React, { useEffect, useState } from 'react';
import './splashscreen.css';
import Logo from "./logo.jpg";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate loading, e.g., fetching data
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the timing as needed
  }, []);

  return (
    showSplash && (
      <div className="splash-screen">
        <div className="splash-content">
          <img src={Logo} alt="Your Logo" className="logo" />
          {/* Add any other content you want to display */}
        </div>
      </div>
    )
  );
}

export default SplashScreen;
