import React, { useMemo } from 'react';
import { SIZE_VARIANTS } from '../../../constants/uiConstants';

const SIZE_CLASSES = {
  [SIZE_VARIANTS.SMALL]: 'w-8 h-8',
  [SIZE_VARIANTS.MEDIUM]: 'w-12 h-12',
  [SIZE_VARIANTS.LARGE]: 'w-16 h-16',
};

const Avatar = ({ src, alt, size = SIZE_VARIANTS.MEDIUM, online = false }) => {
  const avatarClassName = useMemo(
    () => `avatar-image ${SIZE_CLASSES[size]} rounded-full object-cover`,
    [size]
  );

  return (
    <div className="avatar-container relative inline-block">
      <img
        src={src}
        alt={alt}
        className={avatarClassName}
      />
      {online && (
        <span className="avatar-status absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
};

export default React.memo(Avatar);

