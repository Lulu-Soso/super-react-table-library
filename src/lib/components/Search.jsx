import React from 'react';

const Search = ({ searchValue, handleSearchChange, labelSearchText }) => {
  return (
    <div className="search">
      <label htmlFor="search">{labelSearchText}</label>
      <input
        id="search"
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
