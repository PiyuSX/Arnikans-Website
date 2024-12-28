import React from 'react';

const TechIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 w-16 h-16">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
             alt="React" className="w-full h-full animate-spin-slow" />
      </div>
      <div className="absolute top-40 left-20 w-12 h-12">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
             alt="Python" className="w-full h-full animate-bounce-slow" />
      </div>
      <div className="absolute bottom-40 right-40 w-14 h-14">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
             alt="JavaScript" className="w-full h-full animate-pulse" />
      </div>
      <div className="absolute top-60 right-60 w-10 h-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
             alt="Java" className="w-full h-full animate-float" />
      </div>
    </div>
  );
};

export default TechIcons;