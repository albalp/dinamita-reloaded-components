import { BiChevronLeft, BiChevronRight, BiCalendar } from "react-icons/bi";
import { useCalendar } from '../hooks/useCalendar';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from './SaveButton';
import '../css/calendar.css';

const Calendar = function ({dark, shadow, backgroundColor, size, variant}) {

    const { months, calendar, monthNumber, currentDate, daysMonth, daysPreviousMonth, prevMonth, nextMonth, selectDate, resetDate } = useCalendar();

    return (
        <div className={`calendar ${shadow && 'calendar--shadow'} ${dark && 'calendar--dark'} calendar-size--${size}`} style={backgroundColor && { backgroundColor }}>
            <div className="calendar-header">
                <div className="calendar-header-date">
                    <h3 className="calendar-header-date-month">{months[monthNumber]}</h3>
                    <p className="calendar-header-date-year">{calendar.year}</p>
                </div>
                <div className="calendar-header-actions">
                    <Button onClick={prevMonth} shadow={dark ? false : true} icon={<BiChevronLeft/>} size="small"  borderRadius/>
                    <Button onClick={nextMonth} shadow={dark ? false : true} icon={<BiChevronRight/>} size="small" borderRadius/>
                </div>
            </div>
            <div className="calendar-week">
                <div className="calendar-week-day">Sund</div>
                <div className="calendar-week-day">Mon</div>
                <div className="calendar-week-day">Tues</div>
                <div className="calendar-week-day">Wed</div>
                <div className="calendar-week-day">Thurs</div>
                <div className="calendar-week-day">Frid</div>
                <div className="calendar-week-day">Sat</div>
            </div>
            
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
            <Button onClick={resetDate} shadow={dark ? false : true} label="Today" icon={<BiCalendar/>} size="small" borderRadius/>    
            <div className={`calendar-legend ${calendar.dateSelected && (calendar.dateSelected.getDate() !== currentDate.getDate() || calendar.dateSelected.getMonth() !== currentDate.getMonth() || calendar.dateSelected.getFullYear() !== currentDate.getFullYear()) && 'activated'}`}>You are selecting a date different to current</div>
        </div>
    );
}

Calendar.propTypes = {
    backgroundColor: PropTypes.string,
    dark: PropTypes.bool,
    shadow: PropTypes.bool,
    weather: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
    variant: PropTypes.oneOf(['circle', 'square', 'default']),
};

Calendar.defaultProps = {
    backgroundColor: null,
    dark: false,
    shadow: true,
    weather: false,
    size: 'default',
    variant: 'default',
  };

export default Calendar;