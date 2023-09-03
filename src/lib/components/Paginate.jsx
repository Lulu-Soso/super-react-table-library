import React from "react";

const Paginate = ({
  currentPage,
  handlePreviousPage,
  pageNumbers,
  handlePageClick,
  handleNextPage,
  totalEntries,
}) => {
  return (
    <div className="pagination">
      <button
        className="previous-next"
        onClick={handlePreviousPage}
        disabled={totalEntries === 0}
      >
        Previous
      </button>

      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <span>...</span>
          )}
          <button
            className={number === currentPage ? "current-page" : ""}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>
        </React.Fragment>
      ))}

      <button
        className="previous-next"
        onClick={handleNextPage}
        disabled={totalEntries === 0}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
