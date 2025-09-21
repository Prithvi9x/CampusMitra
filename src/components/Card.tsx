import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'notification' | 'alert';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  variant = 'default'
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200';
  
  const variantClasses = {
    default: 'hover:shadow-md',
    notification: 'hover:shadow-md cursor-pointer',
    alert: 'border-l-4 border-l-alertRed hover:shadow-md cursor-pointer'
  };
  
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-md' : '';
  
  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
