"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ShowEntries = function ShowEntries(_ref) {
  var currentPage = _ref.currentPage,
    entriesToShow = _ref.entriesToShow,
    totalEntries = _ref.totalEntries;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, totalEntries === 0 ? /*#__PURE__*/_react["default"].createElement("div", null, " ") : /*#__PURE__*/_react["default"].createElement("div", {
    className: "entries"
  }, /*#__PURE__*/_react["default"].createElement("span", null, (currentPage - 1) * entriesToShow + 1, "...", Math.min(currentPage * entriesToShow, totalEntries)), /*#__PURE__*/_react["default"].createElement("p", null, totalEntries)));
};
var _default = ShowEntries;
exports["default"] = _default;