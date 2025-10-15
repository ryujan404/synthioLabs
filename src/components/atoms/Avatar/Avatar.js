import React from 'react';

const Avatar = ({ src, alt, size = 'md', online = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="avatar-container relative inline-block">
      <img
        src={src}
        alt={alt}
        className={`avatar-image ${sizeClasses[size]} rounded-full object-cover`}
      />
      {online && (
        <span className="avatar-status absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
};

export default Avatar;

