import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="search-bar relative">
      <div className="search-bar__icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <MdSearch className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-bar__input w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;

