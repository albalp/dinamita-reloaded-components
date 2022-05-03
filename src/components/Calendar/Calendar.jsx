import { BiChevronLeft, BiChevronRight, BiCalendar } from "react-icons/bi";
import { useCalendar } from '../../hooks/useCalendar';
import Days from './Days';
import PropTypes from 'prop-types';
import Button from '../SaveButton';
import './calendar.css';

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
                    <Button aria-label="button previous month" className="calendar-header-actions-action-prev" onClick={prevMonth} shadow={dark ? false : true} icon={<BiChevronLeft/>} size="small"  borderRadius/>
                    <Button aria-label="button next month" className="calendar-header-actions-action-next" onClick={nextMonth} shadow={dark ? false : true} icon={<BiChevronRight/>} size="small" borderRadius/>
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
            <Days calendar={calendar} daysMonth={daysMonth} daysPreviousMonth={daysPreviousMonth} selectDate={selectDate} variant={variant} currentDate={currentDate} monthNumber={monthNumber}/>
            <div className="calendar-footer">
                <Button aria-label="button reset date" onClick={resetDate} shadow={dark ? false : true} label="Today" icon={<BiCalendar/>} size="small" borderRadius/>    
                <span aria-label="legend warning date selected" className={`calendar-legend ${calendar.dateSelected && (calendar.dateSelected.getDate() !== currentDate.getDate() || calendar.dateSelected.getMonth() !== currentDate.getMonth() || calendar.dateSelected.getFullYear() !== currentDate.getFullYear()) ? 'activated' : ''}`}>You are selecting a date different to current</span>
            </div>
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