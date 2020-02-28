import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
const FilterPeriod = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const dateRangeStyle = expanded ? { display: 'none' } : { display: 'inline' };
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  return (
    <div className="filter-period">
      {!expanded && <div className="filter-period-unexpanded">
        <i className="far fa-calendar-alt"></i>
        <span>Period</span>
        <span className="date-range" style={dateRangeStyle}>1 March - 8 March</span>
        <span onClick={toggleExpand}><i className="fas fa-chevron-down"></i></span>

      </div>}

      {expanded && <div className="filter-period-expanded">
        <div className="head">
          <div>
            <i className="far fa-calendar-alt"></i>
            <span>Period</span>
          </div>
          <span onClick={toggleExpand}><i className="fas fa-times"></i></span>

        </div>
        <div className="picker-container">
          <div className="range-date-option">
            <button>Today</button>
            <button>Yesterday</button>
            <button>Last 7 Days</button>
            <button>Last 30 days</button>
            <button>This Month</button>
            <button>Custom</button>
            <button>Apply</button>
          </div>
          <div className="calendar">
            <DatePicker inline selected={startDate} />
            <DatePicker inline selected={endDate} />
          </div>
        </div>

      </div>}


    </div>
  );
}

export default FilterPeriod;