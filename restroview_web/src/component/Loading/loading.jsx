import React from 'react'
import Lottie from "lottie-react";
import loading1 from "./loading.json";
import "./loading.css";

const loading = () => {
  return (
    <div className='load'>
      <Lottie animationData={loading1}/>
    </div>
  )
}

export default loading
