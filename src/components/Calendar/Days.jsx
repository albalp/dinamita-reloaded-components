import { v4 as uuidv4 } from 'uuid';
import Day from './Day';

const Days = ({ calendar, daysPreviousMonth, daysMonth, selectDate, variant, currentDate, monthNumber }) => {

  return (
    <div className="calendar-month">
        {
            daysPreviousMonth.length !== 7 && daysPreviousMonth.map(dayPreviou => <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--before`}>{dayPreviou}</div>)

        }

        {
          daysMonth.map( day => <Day key={uuidv4()} calendar={calendar} handleClick={selectDate} monthNumber={monthNumber} variant={variant} currentDate={currentDate} day={day}/>)
        }
    </div>
  )
}

export default Days;
