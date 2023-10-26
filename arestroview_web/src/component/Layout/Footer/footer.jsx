import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { saveUserData } from "../../../actions/emailAction";
import { useDispatch, useSelector } from 'react-redux';

const Footer = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userLogin.userInfo?._id || state.userRegister.userInfo?._id);
console.log(userId);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and page reload
    if (email && userId) {
      console.log(email);
      dispatch(saveUserData(email, userId)); // Dispatch the action with email and user ID
      // You can also clear the email field after submission
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faMapMarker} className='iconss' />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faPhone} className='iconss'/>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faEnvelopeOpen}  className='iconss'/>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://res.cloudinary.com/du1tas6pe/image/upload/v1698222318/gri625xv6g9uqtbjfpwc.png"
                      className="img-fluid"
                      alt="logo"
                      style={{ height: '75px' }}
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} className="facebook-bg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-bg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlus} className="google-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a className="a_footer" href="/home">Home</a></li>
                  {/* <li><a className="a_footer" href="#">about</a></li> */}
                  <li><a className="a_footer" href="/vendors">Vendor</a></li>
                  <li><a className="a_footer" href="/portfolio">portfolio</a></li>
                  <li><a className="a_footer" href="/reels">Reels</a></li>
                  <li><a className="a_footer" href="/filters">Filters</a></li>
                  <li><a className="a_footer" href="/">Landing</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="e_mail"
                      type="text"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
                    />
                    <button className="submit_btn" type="submit">
                      
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved Mithila</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a className="a_footer" href="/home">Home</a></li>
                  <li><a className="a_footer" href="/vendors">Vendor</a></li>
                  <li><a className="a_footer" href="/portfolio">portfolio</a></li>
                  <li><a className="a_footer" href="/reels">Reels</a></li>
                  <li><a className="a_footer" href="/filters">Filters</a></li>
                  <li><a className="a_footer" href="/">Landing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
