import { v4 as uuidv4 } from 'uuid';
import Day from './Day';

const Days = ({ calendar, daysPreviousMonth, daysMonth, selectDate, setValue, variant, currentDate, monthNumber }) => {

  const handleClick = (e) => {
    selectDate(e);
    let newDate = new Date(calendar.year, monthNumber, parseInt(e.target.textContent));
    setValue(newDate);
  }
  
  return (
    <div className="calendar-month">
        {
            daysPreviousMonth.length !== 7 && daysPreviousMonth.map(dayPreviou => <div key={uuidv4()} onClick={handleClick} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--before`}>{dayPreviou}</div>)

        }

        {
          daysMonth.map( day => <Day key={uuidv4()} calendar={calendar} handleClick={handleClick} monthNumber={monthNumber} variant={variant} currentDate={currentDate} day={day}/>)
        }
    </div>
  )
}

export default Days;
