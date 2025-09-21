import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'active' | 'alert';
  onClick?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  onClick,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-roboto font-medium transition-all duration-200 cursor-pointer';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    active: 'bg-primary text-white hover:bg-blue-600',
    alert: 'bg-alertRed text-white hover:bg-red-600'
  };
  
  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Chip;
