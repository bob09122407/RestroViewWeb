const sendToken = (user, statusCode, res) => {
    try {
      if (!user) {
        return res.status(401).json({ success: false, message: 'User not found' });
      }
  
      const token = user.getJWTToken();
  
      if (!token) {
        return res.status(500).json({ success: false, message: 'Token generation failed' });
      }
  
      const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
  
      res
        .status(statusCode)
        .cookie('validtoken', token, options)
        .json({
          success: true,
          user,
          token,
        });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  module.exports = sendToken;
  