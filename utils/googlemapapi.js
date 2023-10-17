exports.openGoogleMaps = (req, res) => {
    try {
      const { latitude, longitude } = req.query;
      if (!latitude || !longitude) {
        return res.status(400).json({
          success: false,
          message: 'Please provide "latitude" and "longitude" in the query parameters.',
        });
      }
  
      // Create a Google Maps URL with the provided latitude and longitude
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
      // Redirect the user to the Google Maps URL
      res.redirect(googleMapsUrl);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message,
      });
    }
  };
  