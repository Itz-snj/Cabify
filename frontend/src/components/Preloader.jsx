// src/components/Preloader.jsx
import React from "react";
import Lottie from "lottie-react";
import taxiLoader from "../assets/taxi_loader.json";

const Preloader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="w-64 h-64">
        <Lottie animationData={taxiLoader} loop={true} />
      </div>
    </div>
  );
};

export default Preloader;
