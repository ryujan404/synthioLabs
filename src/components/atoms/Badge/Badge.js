import React from 'react';

const Badge = ({ count, variant = 'primary' }) => {
  if (!count || count === 0) return null;

  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    danger: 'bg-red-600 text-white',
    success: 'bg-green-600 text-white',
  };

  return (
    <span
      className={`badge ${variantClasses[variant]} text-xs font-medium rounded-full px-2 py-0.5 min-w-[20px] text-center`}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default Badge;

