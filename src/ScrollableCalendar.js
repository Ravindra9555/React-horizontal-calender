// src/ScrollableCalendar.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import "./Calendar.css"; // Ensure you have styles

const getWeekDays = (startDate) => {
  const week = [];
  const startOfWeek = dayjs(startDate).startOf("week");

  for (let i = 0; i < 7; i++) {
    week.push(startOfWeek.add(i, "day"));
  }

  return week;
};

const ScrollableCalendar = ({
  onDateSelect,
  prevButtonColor = "#007bff",
  nextButtonColor = "#007bff",
}) => {
  const today = dayjs();
  const [currentWeekStart, setCurrentWeekStart] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);

  const goToPreviousWeek = () => {
    setCurrentWeekStart(currentWeekStart.subtract(7, "day"));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart(currentWeekStart.add(7, "day"));
  };

  const handleDateClick = (day) => {
    if (day.isBefore(today, "day")) return;
    setSelectedDate(day);
    if (onDateSelect) {
      onDateSelect(day.toDate()); // Pass the date as a JavaScript Date object
    }
  };

  const currentWeekDays = getWeekDays(currentWeekStart);

  const currentMonth = currentWeekStart.format("MMMM").toUpperCase();
  const currentYear = currentWeekStart.format("YYYY");

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          onClick={goToPreviousWeek}
          className="nav-button"
          style={{ backgroundColor: prevButtonColor }}
        >
          {"< PREV"}
        </button>
        <span className="month-label">
          {currentMonth} {currentYear}
        </span>
        <button
          onClick={goToNextWeek}
          className="nav-button"
          style={{ backgroundColor: nextButtonColor }}
        >
          {"NEXT >"}
        </button>
      </div>
      <div className="calendar-scroll">
        <div className="calendar-week">
          {currentWeekDays.map((day) => (
            <div
              key={day.format("YYYY-MM-DD")}
              className={`day ${
                day.isBefore(today, "day") ? "disabled" : ""
              } ${selectedDate?.isSame(day, "day") ? "selected" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              <div className="day-name">{day.format("ddd").toUpperCase()}</div>
              <div className="date">{day.format("D")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ScrollableCalendar.propTypes = {
  onDateSelect: PropTypes.func,
  prevButtonColor: PropTypes.string,
  nextButtonColor: PropTypes.string,
};

export default ScrollableCalendar;
