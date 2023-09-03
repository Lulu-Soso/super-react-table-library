import React from 'react'

const Filter = ({ entriesToShow, handleEntriesChange, labelFilterText }) => {
  return (
    <div className="filter">
      <label htmlFor="show">{labelFilterText}</label>
      <select
        name="state"
        id="show"
        value={entriesToShow}
        onChange={handleEntriesChange}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      {/* <p>entries</p> */}
    </div>
  );
};

export default Filter;
