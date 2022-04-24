import { v4 as uuidv4 } from 'uuid';

const Days = ({ calendar, daysPreviousMonth, daysMonth, selectDate, variant, currentDate, monthNumber }) => {

  return (
    <div className="calendar-month">
        {
            daysPreviousMonth.length !== 7 && daysPreviousMonth.map(dayPreviou => <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--before`}>{dayPreviou}</div>)

        }

        {
            daysMonth.map(day => (
                day === calendar.currentDay && monthNumber === currentDate.getMonth() && calendar.year === currentDate.getFullYear()
                ? <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--active`}>{day}</div>
                : calendar.dateSelected && day === calendar.dateSelected.getDate() && monthNumber === calendar.dateSelected.getMonth()
                    ? <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--selected`}>{day}</div>
                    : <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant}`}>{day}</div>
            ))
        }
    </div>
  )
}

export default Days;
