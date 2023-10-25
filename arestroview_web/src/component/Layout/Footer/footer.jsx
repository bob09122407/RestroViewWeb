import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
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
                  <li><a class="a_footer" href="#">Home</a></li>
                  <li><a class="a_footer" href="#">about</a></li>
                  <li><a class="a_footer" href="#">services</a></li>
                  <li><a class="a_footer" href="#">portfolio</a></li>
                  <li><a class="a_footer" href="#">Contact</a></li>
                  <li><a class="a_footer" href="#">About us</a></li>
                  <li><a class="a_footer" href="#">Our Services</a></li>
                  <li><a class="a_footer" href="#">Expert Team</a></li>
                  <li><a class="a_footer" href="#">Contact us</a></li>
                  <li><a class="a_footer" href="#">Latest News</a></li>
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
                  <form action="#">
                    <input class="e_mail" type="text" placeholder="Email Address" />
                    <button class="submit_btn"><i className="fa fa-telegram"></i></button>
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
                  <li><a class="a_footer" href="#">Home</a></li>
                  <li><a class="a_footer" href="#">Terms</a></li>
                  <li><a class="a_footer" href="#">Privacy</a></li>
                  <li><a class="a_footer" href="#">Policy</a></li>
                  <li><a class="a_footer" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
