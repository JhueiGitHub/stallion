// File: components/TubeLight.tsx
import React from "react";

const TubeLight: React.FC = () => {
  return (
    <div className="relative w-full h-2 my-8">
      <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1 bg-green-300 rounded-full shadow-lg shadow-green-500/50"></div>
    </div>
  );
};

export default TubeLight;
