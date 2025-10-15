import React, { useMemo } from 'react';

const BASE_CLASS = 'icon-button p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600';
const ICON_CLASS = 'w-5 h-5';

const IconButton = ({ icon: Icon, onClick, className = '', ariaLabel = '' }) => {
  const buttonClassName = useMemo(
    () => `${BASE_CLASS} ${className}`,
    [className]
  );

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={buttonClassName}
    >
      <Icon className={ICON_CLASS} />
    </button>
  );
};

export default React.memo(IconButton);

