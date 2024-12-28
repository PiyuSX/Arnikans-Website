import React from 'react';
import { TECH_ICONS } from './constants';
import OrbitingIcon from './OrbitingIcon';

export default function TechSolarSystem() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Center React Icon */}
      <div className="absolute z-10 animate-spin-slow transform hover:scale-125 transition-transform">
        <img
          src={TECH_ICONS.center.icon}
          alt={TECH_ICONS.center.name}
          className="w-24 h-24"
          title={TECH_ICONS.center.name}
        />
      </div>

      {/* Inner Orbit */}
      <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-200/20 animate-spin-medium">
        {TECH_ICONS.innerOrbit.map((tech, index) => (
          <OrbitingIcon
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            orbitClass={`transform -translate-x-1/2 -translate-y-1/2 
              ${index === 0 ? 'top-0 left-1/2' : 
                index === 1 ? 'top-1/2 right-0' :
                'bottom-0 left-1/2'}`}
            delay=""
            size="w-12 h-12"
          />
        ))}
      </div>

      {/* Middle Orbit */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-200/20 animate-spin-fast">
        {TECH_ICONS.middleOrbit.map((tech, index) => (
          <OrbitingIcon
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            orbitClass={`transform -translate-x-1/2 -translate-y-1/2
              ${index === 0 ? 'top-0 left-1/2' :
                index === 1 ? 'top-1/2 right-0' :
                index === 2 ? 'bottom-0 left-1/2' :
                'top-1/2 left-0'}`}
            delay=""
            size="w-10 h-10"
          />
        ))}
      </div>

      {/* Outer Orbit */}
      <div className="absolute w-[550px] h-[550px] rounded-full border border-gray-200/20 animate-spin-slow">
        {TECH_ICONS.outerOrbit.map((tech, index) => (
          <OrbitingIcon
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            orbitClass={`transform -translate-x-1/2 -translate-y-1/2
              ${index === 0 ? 'top-0 left-1/2' :
                index === 1 ? 'top-1/2 right-0' :
                index === 2 ? 'bottom-0 left-1/2' :
                'top-1/2 left-0'}`}
            delay=""
            size="w-8 h-8"
          />
        ))}
      </div>
    </div>
  );
}