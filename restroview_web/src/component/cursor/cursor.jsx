import React, { useEffect, useRef } from 'react';
import { particlesCursor } from 'threejs-toys'
import './cursor.css'; // Import your CSS file

const YourComponent = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const pc = particlesCursor({
      el: appRef.current,
      gpgpuSize: 512,
      colors: [0x00ff00, 0x0000ff],
      color: 0xff0000,
      coordScale: 0.5,
      noiseIntensity: 0.001,
      noiseTimeCoef: 0.0001,
      pointSize: 5,
      pointDecay: 0.0025,
      sleepRadiusX: 250,
      sleepRadiusY: 250,
      sleepTimeCoefX: 0.001,
      sleepTimeCoefY: 0.002,
    });

    const handleClick = () => {
      pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
      pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
      pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
      pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id="app" ref={appRef}>
      <div id="hero">
      
      </div>
    </div>
  );
};

export default YourComponent;
