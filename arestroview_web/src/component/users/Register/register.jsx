import React, { useState ,useEffect} from 'react';
import './register.css';
import Lottie from 'lottie-react';

import animationData from './register.json';
import animationData1 from './rename1.json';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../../../actions/userAction'; // Import your action creators
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const userRegister = useSelector((state) => state.userRegister);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userLogin.success) {
      navigate('/home');
    }
    if (userLogin.error) {
      toast.error(userLogin.error);
    }
    if(userRegister.success){
      navigate('/home');
    }
    if(userRegister.error){
      toast.error(userRegister.error);
    }
  }, [userLogin.success, navigate,userLogin.error, userRegister.error, userRegister.success]);

 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch login action
      await dispatch(login(formData.email, formData.password));
  
      // Check if login was successful
      if (userLogin.success) {
        // Redirect to /home on successful login
        navigate('/home');
      }
      // else if(userLogin.error){
      //   toast('Registration error. Please try again later.');
     
      //   }
      }
     catch  {
      
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch register action
      await dispatch(register(formData.username, formData.email, formData.password));
  
      // Check if registration was successful
      if (userRegister.success) {
        // Redirect to /home on successful registration
        navigate('/home');
      }
    } catch  {
    }
  };
  
  
  return (
    <div className={`containerr ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-containerr">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i>
                <TfiEmail />
              </i>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <i>
                <RiLockPasswordLine />
              </i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i>
                  <FcGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <AiFillGithub />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <BsFacebook />
                </i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form" onSubmit={handleRegister}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <BiSolidUserCircle />
              </i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <i>
                <TfiEmail />
              </i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <i>
                <RiLockPasswordLine />
              </i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i>
                  <FcGoogle />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <BsFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <AiFillGithub />
                </i>
              </a>
            </div>
          </form>
          {/* <ToastContainer position="top-right" style={{zIndex:2}} autoClose={5000} hideProgressBar closeOnClick pauseOnHover /> */}
        </div>
      </div>

      <div className="panels-containerr">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          <div className="image">
            <Lottie animationData={animationData1} />
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <div className="image">
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Register;