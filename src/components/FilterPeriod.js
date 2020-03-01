import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./FilterPeriode.scss";
import { format, subDays, eachDayOfInterval, subMonths } from "date-fns";
import { startOfMonth } from "date-fns/esm";
const FilterPeriod = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const dateRangeStyle = expanded ? { display: 'none' } : { display: 'inline' };
  const [filterMode, setFilterMode] = useState('LAST_7_DAYS');
  const [startDate, setStartDate] = useState(new Date());
  const [minStartDate, setMinStartDate] = useState(new Date());
  const [maxStartDate, setMaxStartDate] = useState(new Date());
  const [minEndDate, setMinEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date());
  const [highlightedStartDate, setHighlightedStartDate] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDateRange, setSelectedDateRange] = useState({});
  /* for timeperiod default (lastweek) */
  const strStartDateWeek = format(subDays(new Date(), 7), 'd MMMM yyyy');
  const strEndDateWeek = format(subDays(new Date(), 1), 'd MMMM yyyy');
  const [strSelectedDateRange, setStrSelectedDataRange] = useState(`${strStartDateWeek} - ${strEndDateWeek}`);
  /* */


  const doSetSelectedDateRange = () => {
    setSelectedDateRange({ from: startDate, to: endDate });
  }
  /* filterMode listener */
  useEffect(() => {
    switch (filterMode) {
      case "TODAY":
        setStartDate(new Date());
        setEndDate(new Date());
        setMinStartDate(new Date());
        setMaxStartDate(new Date());
        setMinEndDate(new Date());
        setMaxEndDate(new Date());
        setHighlightedStartDate([new Date()]);
        break;
      case "YESTERDAY":
        setStartDate(subDays(new Date(), 1));
        setEndDate(subDays(new Date(), 1));
        setMinStartDate(subDays(new Date(), 1));
        setMaxStartDate(subDays(new Date(), 1));
        setMinEndDate(subDays(new Date(), 1));
        setMaxEndDate(subDays(new Date(), 1));
        setHighlightedStartDate([subDays(new Date(), 1)]);
        break;
      case "LAST_7_DAYS":
        setStartDate(subDays(new Date(), 7));
        setEndDate(subDays(new Date(), 1));
        setMinStartDate(subDays(new Date(), 7));
        setMaxStartDate(subDays(new Date(), 1));
        setMinEndDate(subDays(new Date(), 7));
        setMaxEndDate(subDays(new Date(), 1));
        const range = eachDayOfInterval({
          start: subDays(new Date(), 7),
          end: subDays(new Date(), 1),
        })
        setHighlightedStartDate(range);
        break;
      case "LAST_30_DAYS":
        setStartDate(subDays(new Date(), 30));
        setEndDate(subDays(new Date(), 1));
        setMinStartDate(subDays(new Date(), 30));
        setMaxStartDate(subDays(new Date(), 1));
        setMinEndDate(subDays(new Date(), 30));
        setMaxEndDate(subDays(new Date(), 1));
        setHighlightedStartDate(eachDayOfInterval({
          start: subDays(new Date(), 30),
          end: subDays(new Date(), 1),
        }));
        break;
      case "THIS_MONTH":
        setStartDate(startOfMonth(new Date()));
        setEndDate(new Date());
        setMinStartDate(startOfMonth(new Date()));
        setMaxStartDate(new Date());
        setMinEndDate(startOfMonth(new Date()));
        setMaxEndDate(new Date());
        setHighlightedStartDate(eachDayOfInterval({
          start: startOfMonth(new Date()),
          end: new Date(),
        }));
        break;
      case "THIS_MONTH":
        setStartDate(startOfMonth(new Date()));
        setEndDate(new Date());
        setMinStartDate(startOfMonth(new Date()));
        setMaxStartDate(new Date());
        setMinEndDate(startOfMonth(new Date()));
        setMaxEndDate(new Date());
        setHighlightedStartDate(eachDayOfInterval({
          start: startOfMonth(new Date()),
          end: new Date(),
        }));
        break;
      case "THIS_MONTH":
        setStartDate(startOfMonth(new Date()));
        setEndDate(new Date());
        setMinStartDate(startOfMonth(new Date()));
        setMaxStartDate(new Date());
        setMinEndDate(startOfMonth(new Date()));
        setMaxEndDate(new Date());
        setHighlightedStartDate(eachDayOfInterval({
          start: startOfMonth(new Date()),
          end: new Date(),
        }));
        break;
      case "CUSTOM":
        /* reset clock to 00:00 to prevent backdate on calling eachDayOfInterval */
        const currentDate = new Date();
        const currentDateReset = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
        setStartDate(subMonths(currentDateReset, 6));
        setEndDate(subMonths(currentDateReset, 6));
        setMinStartDate(subMonths(new Date(), 6));
        setMaxStartDate(new Date());
        setMinEndDate(subMonths(new Date(), 6));
        setMaxEndDate(new Date());
        setHighlightedStartDate({});
        // setHighlightedStartDate(eachDayOfInterval({
        //   start: startOfMonth(new Date()),
        //   end: new Date(),
        // }));
        break;

      default:
        console.error('none of the options are selected');
    }
    doSetSelectedDateRange();

  }, [filterMode]);

  const handleClickApply = () => {
    const strStartDate = format(startDate, 'd MMMM yyyy');
    const strEndDate = format(endDate, 'd MMMM yyyy');
    setStrSelectedDataRange(`${strStartDate} - ${strEndDate}`);
    setExpanded(false);
  }

  /* selectedDateRange listener */
  // const selectedDateRangeListener = useCallback(() => {
  //   console.log('selecteddaterangelistener');
  //   setSelectedDateRange({
  //     from: startDate,
  //     to: endDate,
  //   });

  // }, [startDate, endDate]);
  // useEffect(() => {
  //   selectedDateRangeListener();

  // }, [selectedDateRangeListener]);
  const handleDatePickerChange = (date, datePicker) => {
    if (filterMode === 'CUSTOM') {
      if (datePicker === "startDate") {
        setStartDate(date);
        setMinEndDate(date);
        setHighlightedStartDate({});
        setEndDate(date);

      } else {
        setEndDate(date);
        setHighlightedStartDate(eachDayOfInterval({
          start: startDate,
          end: new Date(date),
        }));


      }


    }

  }

  return (
    <div className="filter-period">
      {!expanded && <div className="filter-period-unexpanded">
        <i className="far fa-calendar-alt"></i>
        <span>Period</span>
        <span className="date-range" style={dateRangeStyle}>{strSelectedDateRange}</span>
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
            <button onClick={() => setFilterMode("TODAY")} className={filterMode === "TODAY" ? "filter-selected" : ""}>Today</button>
            <button onClick={() => setFilterMode("YESTERDAY")} className={filterMode === "YESTERDAY" ? "filter-selected" : ""}>Yesterday</button> <button onClick={() => setFilterMode("LAST_7_DAYS")} className={filterMode === "LAST_7_DAYS" ? "filter-selected" : ""}>Last 7 Days</button> <button onClick={() => setFilterMode("LAST_30_DAYS")} className={filterMode === "LAST_30_DAYS" ? "filter-selected" : ""}>Last 30 days</button> <button onClick={() => setFilterMode("THIS_MONTH")} className={filterMode === "THIS_MONTH" ? "filter-selected" : ""}>This Month</button>
            <button onClick={() => setFilterMode("CUSTOM")} className={filterMode === "CUSTOM" ? "filter-selected" : ""}>Custom</button>
            <button onClick={handleClickApply}>Apply</button>
          </div>
          <div className="calendar">
            <DatePicker inline minDate={minStartDate} maxDate={maxStartDate} highlightDates={highlightedStartDate} selected={startDate} onChange={(date) => handleDatePickerChange(date, "startDate")} />
            <DatePicker inline minDate={minEndDate} maxDate={maxEndDate} highlightDates={highlightedStartDate} selected={endDate} onChange={(date) => handleDatePickerChange(date, "endDate")} />
          </div>
        </div>

      </div>}


    </div>
  );
}

export default FilterPeriod;