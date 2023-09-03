"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Filter = function Filter(_ref) {
  var entriesToShow = _ref.entriesToShow,
    handleEntriesChange = _ref.handleEntriesChange,
    labelFilterText = _ref.labelFilterText;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "show"
  }, labelFilterText), /*#__PURE__*/_react["default"].createElement("select", {
    name: "state",
    id: "show",
    value: entriesToShow,
    onChange: handleEntriesChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "100"
  }, "100")));
};
var _default = Filter;
exports["default"] = _default;