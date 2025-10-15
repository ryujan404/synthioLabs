import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container flex items-center gap-2">
      <div className="logo-icon flex items-center justify-center w-8 h-8 bg-blue-600 rounded">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="logo-svg w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="logo-text text-xl font-semibold text-blue-600">
        Synthio Labs
      </span>
    </div>
  );
};

export default Logo;

