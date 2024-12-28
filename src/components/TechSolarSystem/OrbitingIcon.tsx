import React from 'react';

interface OrbitingIconProps {
  icon: string;
  name: string;
  orbitClass: string;
  delay: string;
  size: string;
}

export default function OrbitingIcon({ icon, name, orbitClass, delay, size }: OrbitingIconProps) {
  return (
    <div className={`absolute ${orbitClass} ${delay}`}>
      <img
        src={icon}
        alt={name}
        className={`${size} transition-transform hover:scale-125`}
        title={name}
      />
    </div>
  );
}