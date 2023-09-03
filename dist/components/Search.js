"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Search = function Search(_ref) {
  var searchValue = _ref.searchValue,
    handleSearchChange = _ref.handleSearchChange,
    labelSearchText = _ref.labelSearchText;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "search"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search"
  }, labelSearchText), /*#__PURE__*/_react["default"].createElement("input", {
    id: "search",
    type: "text",
    value: searchValue,
    onChange: handleSearchChange
  }));
};
var _default = Search;
exports["default"] = _default;