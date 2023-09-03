"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Paginate = function Paginate(_ref) {
  var currentPage = _ref.currentPage,
    handlePreviousPage = _ref.handlePreviousPage,
    pageNumbers = _ref.pageNumbers,
    handlePageClick = _ref.handlePageClick,
    handleNextPage = _ref.handleNextPage,
    totalEntries = _ref.totalEntries;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "previous-next",
    onClick: handlePreviousPage,
    disabled: totalEntries === 0
  }, "Previous"), pageNumbers.map(function (number, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: number
    }, index > 0 && pageNumbers[index - 1] !== number - 1 && /*#__PURE__*/_react["default"].createElement("span", null, "..."), /*#__PURE__*/_react["default"].createElement("button", {
      className: number === currentPage ? "current-page" : "",
      onClick: function onClick() {
        return handlePageClick(number);
      }
    }, number));
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "previous-next",
    onClick: handleNextPage,
    disabled: totalEntries === 0
  }, "Next"));
};
var _default = Paginate;
exports["default"] = _default;