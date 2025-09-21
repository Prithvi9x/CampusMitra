import React from 'react';

interface IconProps {
  icon: any;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className = '' }) => {
  return React.createElement(IconComponent, { className });
};

export default Icon;
