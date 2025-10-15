import React, { useCallback } from 'react';
import { MdSearch } from 'react-icons/md';
import { PLACEHOLDER_TEXT } from '../../../constants/uiConstants';

const ICON_WRAPPER_CLASS = 'search-bar__icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400';
const ICON_CLASS = 'w-5 h-5';
const INPUT_CLASS = 'search-bar__input w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

const SearchBar = ({ value, onChange, placeholder = PLACEHOLDER_TEXT.SEARCH }) => {
  const handleChange = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div className="search-bar relative">
      <div className={ICON_WRAPPER_CLASS}>
        <MdSearch className={ICON_CLASS} />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
};

export default React.memo(SearchBar);

