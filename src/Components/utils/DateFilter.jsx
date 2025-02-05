import React, { useState, useEffect } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const DateFilter = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: 1400,
    month: 1,
    day: 1,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.calendar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleChange = (date) => {
    if (date) {
      setSelectedDate(date); // تاریخ جدید را ست می‌کند
      const formattedDate = `${date.year}/${date.month}/${date.day}`;
      onDateChange(formattedDate);
    } else {
      setSelectedDate({ year: 1400, month: 1, day: 1 }); // مقدار پیش‌فرض
      onDateChange(null);
    }
  };

  return (
    <div className="relative calendar-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 px-4 py-2 rounded-md text-white"
      >
        {isOpen ? "بستن تقویم" : "انتخاب تاریخ"}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0  p-2 rounded-lg shadow-lg z-50">
          <Calendar
            value={selectedDate}
            onChange={handleChange}
            locale="fa"
            shouldHighlightWeekends
          />
        </div>
      )}
    </div>
  );
};

export default DateFilter;
