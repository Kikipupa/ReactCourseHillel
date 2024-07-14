import React from "react";

const FilterSort = ({ onFilter, onSort }) => {
  return (
    <div className="filter-sort">
      <button onClick={() => onFilter(true)}>Completed</button>
      <button onClick={() => onFilter(false)}>Incomplete</button>
      <button onClick={onSort}>Sort by Title</button>
    </div>
  );
};

export default FilterSort;
