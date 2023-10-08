import React, { useState } from 'react';
import './register.css'; 
import Lottie from "lottie-react";
import animationData from './register.json';
import animationData1 from './rename1.json';
import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {BiSolidUserCircle} from "react-icons/bi";
import {TfiEmail} from "react-icons/tfi";
import {RiLockPasswordLine} from "react-icons/ri";

const Register=()=> {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`containerr ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-containerr">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
          <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class=""><TfiEmail/></i>
              <input type="text" placeholder="email" />
            </div>
            <div class="input-field">
              <i class=""><RiLockPasswordLine/></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class=""><FcGoogle/></i>
              </a>
              <a href="#" class="social-icon">
                <i class=""><AiFillGithub/></i>
              </a>
              <a href="#" class="social-icon">
                <i class=""><BsFacebook/></i>
              </a>
             
            </div>
          </form>
          <form action="#" className="sign-up-form">
          <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class=""><BiSolidUserCircle/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class=""><TfiEmail/></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class=""><RiLockPasswordLine/></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class=""><FcGoogle/></i>
              </a>
              <a href="#" class="social-icon">
                <i class=""><BsFacebook/></i>
              </a>
              <a href="#" class="social-icon">
                <i class=""><AiFillGithub/></i>
              </a>
             
            </div>

          </form>
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
          {/* <img src="img/register.svg" className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Register;

