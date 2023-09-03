import React, { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import Search from "./Search";
import Filter from "./Filter";
import Paginate from "./Paginate";
import ShowEntries from "./ShowEntries";

const EmployeesTable = ({ data, columnsToShow, columnTitles, labelFilterText, labelSearchText }) => {
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(columnsToShow[0]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleEntriesChange = (e) => {
    setEntriesToShow(+e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handleColumnClick = (clickedColumn) => {
    if (clickedColumn === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(clickedColumn);
      setSortOrder("asc");
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    if (sortBy === null) return 0;
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  const filteredData = sortedData.filter((employee) => {
    if (!searchValue) return true;
    const searchTerms = searchValue.toLowerCase().split(" ");
    return searchTerms.every((term) =>
      Object.values(employee)
        .filter((value) => typeof value === "string")
        .some((value) => value.toLowerCase().includes(term))
    );
  });

  const totalPages = Math.ceil(filteredData.length / entriesToShow);
  const pageNumbers = getPageNumbers(totalPages, currentPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  function getPageNumbers(totalPages, currentPage, pagesToShow = 5) {
    const halfWay = Math.ceil(pagesToShow / 2);

    // Déterminer les limites de départ et de fin pour la pagination
    let startPage = currentPage - halfWay + 1;
    let endPage = currentPage + halfWay - 1;

    // Si startPage est négatif ou zéro
    if (startPage <= 0) {
      endPage -= startPage - 1;
      startPage = 1;
    }

    // Si endPage dépasse totalPages
    if (endPage > totalPages) {
      endPage = totalPages;
    }

    // Si après avoir fixé endPage, startPage est toujours négatif ou zéro
    if (endPage - pagesToShow + 1 > 0) {
      startPage = endPage - pagesToShow + 1;
    }

    // Générer les numéros de page
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Ajouter la première et la dernière page si elles ne sont pas déjà présentes
    if (startPage !== 1) pages.unshift(1);
    if (endPage !== totalPages && totalPages !== 1) pages.push(totalPages);

    return pages;
  }

  useEffect(() => {
    setShowErrorModal(filteredData.length === 0);
  }, [filteredData]);

  return (
    <div className="app-container">
      <div className="show-search">
        <div className="show-search">
          <Filter
            entriesToShow={entriesToShow}
            handleEntriesChange={handleEntriesChange}
            labelFilterText={labelFilterText}
          />
          <Search
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
            labelSearchText={labelSearchText}
          />
        </div>
      </div>
      <table className="employees-table">
        <thead>
          <tr>
            {columnsToShow.map((column, index) => (
              <th
                key={column}
                className={`${sortBy === column ? "sorted-column" : ""}`}
                onClick={() => handleColumnClick(column)} // Ajoutez l'événement onClick
              >
                <div className="th-title">
                  {columnTitles[index]}
                  <span className="up-down">
                    <FaCaretUp
                      className={
                        sortBy === column && sortOrder === "asc"
                          ? "sorted-icon"
                          : ""
                      }
                    />
                    <FaCaretDown
                      className={
                        sortBy === column && sortOrder === "desc"
                          ? "sorted-icon"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData
            .slice((currentPage - 1) * entriesToShow, currentPage * entriesToShow)
            .map((employee, index) => (
              <tr
                key={employee.id}
                className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
              >
                {columnsToShow.map((column) => (
                  <td key={column} className={`${sortBy === column ? "sorted-column" : ""}`}>
                    {employee[column]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>

      {showErrorModal && (
        <div className="error-message">
          <p>No results found for your search.</p>
        </div>
      )}

      <div className="flex-pagination">
      <ShowEntries
          currentPage={currentPage}
          entriesToShow={entriesToShow}
          totalEntries={filteredData.length}
        />

        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          entriesToShow={entriesToShow}
          pageNumbers={pageNumbers}
          handlePageClick={handlePageClick}
          totalEntries={filteredData.length}
        />
      </div>
    </div>
  );
};

export default EmployeesTable;
