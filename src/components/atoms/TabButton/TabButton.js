import React, { useMemo, useCallback } from 'react';
import { BORDER_RADIUS } from '../../../constants/uiConstants';

const BASE_CLASS = 'tab-button flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-xs md:text-sm font-medium transition-all duration-200';
const DISABLED_CLASS = 'cursor-not-allowed opacity-50';
const ACTIVE_CLASS = 'tab-button--active bg-blue-600 text-white shadow-sm';
const INACTIVE_CLASS = 'tab-button--inactive text-gray-400 hover:bg-white/50';
const ICON_BASE_CLASS = 'tab-button__icon w-4 h-4';
const ICON_ACTIVE_CLASS = 'text-white';
const ICON_INACTIVE_CLASS = 'text-gray-400';
const LABEL_CLASS = 'tab-button__label hidden sm:inline';

const TabButton = ({ icon: Icon, label, isActive, onClick, disabled }) => {
  const buttonClassName = useMemo(() => {
    const classes = [BASE_CLASS];
    if (disabled) classes.push(DISABLED_CLASS);
    classes.push(isActive ? ACTIVE_CLASS : INACTIVE_CLASS);
    return classes.join(' ');
  }, [disabled, isActive]);

  const iconClassName = useMemo(
    () => `${ICON_BASE_CLASS} ${isActive ? ICON_ACTIVE_CLASS : ICON_INACTIVE_CLASS}`,
    [isActive]
  );

  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={buttonClassName}
      style={{ borderRadius: BORDER_RADIUS.PILL }}
    >
      {Icon && <Icon className={iconClassName} />}
      <span className={LABEL_CLASS}>{label}</span>
    </button>
  );
};

export default React.memo(TabButton);

