import React, { useState } from "react";

const ManualCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  return (
    <div className="calendar-container">
      {/* Header */}
      <div className="calendar-header">
        <button onClick={() => setSelectedDate(new Date(year, month - 1, 1))}>&lt;</button>
        <h2>{selectedDate.toLocaleString("default", { month: "long" })} {year}</h2>
        <button onClick={() => setSelectedDate(new Date(year, month + 1, 1))}>&gt;</button>
      </div>

      {/* Grid for Days */}
      <div className="calendar-grid">
        {[...Array(firstDayIndex)].map((_, i) => <div key={`empty-${i}`} />)}

        {[...Array(daysInMonth)].map((_, i) => (
          <div 
            key={i + 1} 
            className={`calendar-day ${selectedDate.getDate() === i + 1 ? "selected" : ""}`} 
            onClick={() => handleDateClick(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManualCalendar;
