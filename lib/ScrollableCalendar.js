"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
require("./Calendar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/ScrollableCalendar.js
// Ensure you have styles

var getWeekDays = function getWeekDays(startDate) {
  var week = [];
  var startOfWeek = (0, _dayjs["default"])(startDate).startOf("week");
  for (var i = 0; i < 7; i++) {
    week.push(startOfWeek.add(i, "day"));
  }
  return week;
};
var ScrollableCalendar = function ScrollableCalendar(_ref) {
  var onDateSelect = _ref.onDateSelect,
    _ref$prevButtonColor = _ref.prevButtonColor,
    prevButtonColor = _ref$prevButtonColor === void 0 ? "#007bff" : _ref$prevButtonColor,
    _ref$nextButtonColor = _ref.nextButtonColor,
    nextButtonColor = _ref$nextButtonColor === void 0 ? "#007bff" : _ref$nextButtonColor;
  var today = (0, _dayjs["default"])();
  var _useState = (0, _react.useState)(today),
    _useState2 = _slicedToArray(_useState, 2),
    currentWeekStart = _useState2[0],
    setCurrentWeekStart = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedDate = _useState4[0],
    setSelectedDate = _useState4[1];
  var goToPreviousWeek = function goToPreviousWeek() {
    setCurrentWeekStart(currentWeekStart.subtract(7, "day"));
  };
  var goToNextWeek = function goToNextWeek() {
    setCurrentWeekStart(currentWeekStart.add(7, "day"));
  };
  var handleDateClick = function handleDateClick(day) {
    if (day.isBefore(today, "day")) return;
    setSelectedDate(day);
    if (onDateSelect) {
      onDateSelect(day.toDate()); // Pass the date as a JavaScript Date object
    }
  };
  var currentWeekDays = getWeekDays(currentWeekStart);
  var currentMonth = currentWeekStart.format("MMMM").toUpperCase();
  var currentYear = currentWeekStart.format("YYYY");
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "calendar-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "calendar-header"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: goToPreviousWeek,
    className: "nav-button",
    style: {
      backgroundColor: prevButtonColor
    }
  }, "< PREV"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "month-label"
  }, currentMonth, " ", currentYear), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: goToNextWeek,
    className: "nav-button",
    style: {
      backgroundColor: nextButtonColor
    }
  }, "NEXT >")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calendar-scroll"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "calendar-week"
  }, currentWeekDays.map(function (day) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: day.format("YYYY-MM-DD"),
      className: "day ".concat(day.isBefore(today, "day") ? "disabled" : "", " ").concat(selectedDate !== null && selectedDate !== void 0 && selectedDate.isSame(day, "day") ? "selected" : ""),
      onClick: function onClick() {
        return handleDateClick(day);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "day-name"
    }, day.format("ddd").toUpperCase()), /*#__PURE__*/_react["default"].createElement("div", {
      className: "date"
    }, day.format("D")));
  }))));
};
ScrollableCalendar.propTypes = {
  onDateSelect: _propTypes["default"].func,
  prevButtonColor: _propTypes["default"].string,
  nextButtonColor: _propTypes["default"].string
};
var _default = exports["default"] = ScrollableCalendar;