import React from "react";

const FanWidget = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-52 h-52 animate-spin-slow">
        {/* UI/UX Section */}
        <div className="absolute w-24 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md top-0 left-1/2 transform -translate-x-1/2">
          UI/UX
        </div>
        {/* Branding Section */}
        <div className="absolute w-24 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md top-1/4 left-full transform -translate-y-1/2 -translate-x-full rotate-[72deg]">
          Branding
        </div>
        {/* Art Section */}
        <div className="absolute w-24 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[144deg]">
          Art
        </div>
        {/* Motion Graphics Section */}
        <div className="absolute w-24 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md top-3/4 left-0 transform -translate-y-1/2 translate-x-0 rotate-[216deg]">
          Motion Graphics
        </div>
        {/* Web/Apps Section */}
        <div className="absolute w-24 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[288deg]">
          Web/Apps
        </div>
      </div>
    </div>
  );
};

export default FanWidget;
