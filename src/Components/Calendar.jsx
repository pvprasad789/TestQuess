import React from 'react';
import './Calendar.css';

const Calendar = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month +1, 0).getDate();
  const day = date.getDate();
  const dates = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="calendar">
      <div className="header">
        <label>{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</label>
      </div>
      <div className="days">
        <div className="day">Su</div>
        <div className="day">Mo</div>
        <div className="day">Tu</div>
        <div className="day">We</div>
        <div className="day">Th</div>
        <div className="day">Fr</div>
        <div className="day">Sa</div>
      </div>
      <div className="dates">
        {/* Render the dates */}
        {dates.map((date) => (
          <div
            key={date}
            className={ date === day ? "highlighted date" :"date"}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
