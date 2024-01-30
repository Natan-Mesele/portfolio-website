import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 m-8 border-4 border-blue-500 p-8 rounded-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hero Section</h1>
        <p className="text-lg text-gray-600">Some text in the hero section.</p>
      </div>
    </div>
  );
}

export default Hero;
