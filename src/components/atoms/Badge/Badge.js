import React from 'react';
import { LIMITS, BADGE_VARIANTS } from '../../../constants/uiConstants';

const VARIANT_CLASSES = {
  [BADGE_VARIANTS.PRIMARY]: 'bg-blue-600 text-white',
  [BADGE_VARIANTS.DANGER]: 'bg-red-600 text-white',
  [BADGE_VARIANTS.SUCCESS]: 'bg-green-600 text-white',
};

const Badge = ({ count, variant = BADGE_VARIANTS.PRIMARY }) => {
  if (!count || count === 0) return null;

  const displayCount = count > LIMITS.BADGE_MAX_COUNT ? `${LIMITS.BADGE_MAX_COUNT}+` : count;

  return (
    <span
      className={`badge ${VARIANT_CLASSES[variant]} text-xs font-medium rounded-full px-2 py-0.5 min-w-[20px] text-center`}
    >
      {displayCount}
    </span>
  );
};

export default React.memo(Badge);

