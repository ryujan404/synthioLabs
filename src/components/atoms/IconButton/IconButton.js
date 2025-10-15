import React from 'react';

const IconButton = ({ icon: Icon, onClick, className = '', ariaLabel = '' }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`icon-button p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 ${className}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default IconButton;

