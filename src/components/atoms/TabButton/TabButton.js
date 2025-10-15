import React from 'react';

const TabButton = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        tab-button
        flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-xs md:text-sm font-medium
        transition-all duration-200
        ${
          isActive
            ? "tab-button--active bg-blue-600 text-white shadow-sm"
            : "tab-button--inactive text-gray-400 hover:bg-white/50"
        }
      `}
      style={{ borderRadius: "999px" }}
    >
      {Icon && (
        <Icon 
          className={`tab-button__icon w-4 h-4 ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        />
      )}
      <span className="tab-button__label hidden sm:inline">{label}</span>
    </button>
  );
};

export default TabButton;

