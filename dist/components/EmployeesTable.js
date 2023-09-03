"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa6");
var _Search = _interopRequireDefault(require("./Search"));
var _Filter = _interopRequireDefault(require("./Filter"));
var _Paginate = _interopRequireDefault(require("./Paginate"));
var _ShowEntries = _interopRequireDefault(require("./ShowEntries"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EmployeesTable = function EmployeesTable(_ref) {
  var data = _ref.data,
    columnsToShow = _ref.columnsToShow,
    columnTitles = _ref.columnTitles,
    labelFilterText = _ref.labelFilterText,
    labelSearchText = _ref.labelSearchText;
  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    entriesToShow = _useState2[0],
    setEntriesToShow = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(columnsToShow[0]),
    _useState8 = _slicedToArray(_useState7, 2),
    sortBy = _useState8[0],
    setSortBy = _useState8[1];
  var _useState9 = (0, _react.useState)("asc"),
    _useState10 = _slicedToArray(_useState9, 2),
    sortOrder = _useState10[0],
    setSortOrder = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showErrorModal = _useState12[0],
    setShowErrorModal = _useState12[1];
  var handleEntriesChange = function handleEntriesChange(e) {
    setEntriesToShow(+e.target.value);
    setCurrentPage(1);
  };
  var handleSearchChange = function handleSearchChange(e) {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };
  var handleColumnClick = function handleColumnClick(clickedColumn) {
    if (clickedColumn === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(clickedColumn);
      setSortOrder("asc");
    }
  };
  var sortedData = data.slice().sort(function (a, b) {
    if (sortBy === null) return 0;
    var aValue = a[sortBy];
    var bValue = b[sortBy];
    return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
  var filteredData = sortedData.filter(function (employee) {
    if (!searchValue) return true;
    var searchTerms = searchValue.toLowerCase().split(" ");
    return searchTerms.every(function (term) {
      return Object.values(employee).filter(function (value) {
        return typeof value === "string";
      }).some(function (value) {
        return value.toLowerCase().includes(term);
      });
    });
  });
  var totalPages = Math.ceil(filteredData.length / entriesToShow);
  var pageNumbers = getPageNumbers(totalPages, currentPage);
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  var handlePageClick = function handlePageClick(page) {
    setCurrentPage(page);
  };
  function getPageNumbers(totalPages, currentPage) {
    var pagesToShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    var halfWay = Math.ceil(pagesToShow / 2);

    // Déterminer les limites de départ et de fin pour la pagination
    var startPage = currentPage - halfWay + 1;
    var endPage = currentPage + halfWay - 1;

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
    var pages = [];
    for (var i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Ajouter la première et la dernière page si elles ne sont pas déjà présentes
    if (startPage !== 1) pages.unshift(1);
    if (endPage !== totalPages && totalPages !== 1) pages.push(totalPages);
    return pages;
  }
  (0, _react.useEffect)(function () {
    setShowErrorModal(filteredData.length === 0);
  }, [filteredData]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "show-search"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "show-search"
  }, /*#__PURE__*/_react["default"].createElement(_Filter["default"], {
    entriesToShow: entriesToShow,
    handleEntriesChange: handleEntriesChange,
    labelFilterText: labelFilterText
  }), /*#__PURE__*/_react["default"].createElement(_Search["default"], {
    searchValue: searchValue,
    handleSearchChange: handleSearchChange,
    labelSearchText: labelSearchText
  }))), /*#__PURE__*/_react["default"].createElement("table", {
    className: "employees-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columnsToShow.map(function (column, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column,
      className: "".concat(sortBy === column ? "sorted-column" : ""),
      onClick: function onClick() {
        return handleColumnClick(column);
      } // Ajoutez l'événement onClick
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "th-title"
    }, columnTitles[index], /*#__PURE__*/_react["default"].createElement("span", {
      className: "up-down"
    }, /*#__PURE__*/_react["default"].createElement(_fa.FaCaretUp, {
      className: sortBy === column && sortOrder === "asc" ? "sorted-icon" : ""
    }), /*#__PURE__*/_react["default"].createElement(_fa.FaCaretDown, {
      className: sortBy === column && sortOrder === "desc" ? "sorted-icon" : ""
    }))));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, filteredData.slice((currentPage - 1) * entriesToShow, currentPage * entriesToShow).map(function (employee, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: employee.id,
      className: index % 2 === 0 ? "table-row-even" : "table-row-odd"
    }, columnsToShow.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: column,
        className: "".concat(sortBy === column ? "sorted-column" : "")
      }, employee[column]);
    }));
  }))), showErrorModal && /*#__PURE__*/_react["default"].createElement("div", {
    className: "error-message"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "No results found for your search.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-pagination"
  }, /*#__PURE__*/_react["default"].createElement(_ShowEntries["default"], {
    currentPage: currentPage,
    entriesToShow: entriesToShow,
    totalEntries: filteredData.length
  }), /*#__PURE__*/_react["default"].createElement(_Paginate["default"], {
    currentPage: currentPage,
    totalPages: totalPages,
    handlePreviousPage: handlePreviousPage,
    handleNextPage: handleNextPage,
    entriesToShow: entriesToShow,
    pageNumbers: pageNumbers,
    handlePageClick: handlePageClick,
    totalEntries: filteredData.length
  })));
};
var _default = EmployeesTable;
exports["default"] = _default;