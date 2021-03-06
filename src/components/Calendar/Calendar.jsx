import { BiChevronLeft, BiChevronRight, BiCalendar } from "react-icons/bi";
import { useCalendar } from '../../hooks/useCalendar';
import Days from './Days';
import PropTypes from 'prop-types';
import './calendar.css';


const Calendar = function ({dark, shadow, backgroundColor, size, variant, setValue}) {

    const { months, calendar, monthNumber, currentDate, daysMonth, daysPreviousMonth, prevMonth, nextMonth, selectDate, resetDate} = useCalendar();

    const handleClickReset = () => {
        resetDate();
        let currentDate = new Date();
        if(setValue) setValue(currentDate);
    }

    return (
        <div className={`calendar ${shadow && 'calendar--shadow'} ${dark && 'calendar--dark'} calendar-size--${size}`} style={backgroundColor && { backgroundColor }}>
            <div className="calendar-header">
                <div className="calendar-header-date">
                    <h3 className="calendar-header-date-month">{months[monthNumber]}</h3>
                    <p className="calendar-header-date-year">{calendar.year}</p>
                </div>
                <div className="calendar-header-actions">
                    <button aria-label="button previous month" className="button-modal calendar-button calendar-header-actions-action-prev" onClick={prevMonth}><BiChevronLeft/></button>
                    <button aria-label="button next month" className="button-modal calendar-button calendar-header-actions-action-next" onClick={nextMonth}><BiChevronRight/></button>
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
            <Days calendar={calendar} daysMonth={daysMonth} daysPreviousMonth={daysPreviousMonth} selectDate={selectDate} setValue={setValue} variant={variant} currentDate={currentDate} monthNumber={monthNumber}/>
            <div className="calendar-footer">
                {calendar.dateSelected && (calendar.dateSelected.getDate() !== currentDate.getDate() || calendar.dateSelected.getMonth() !== currentDate.getMonth() || calendar.dateSelected.getFullYear() !== currentDate.getFullYear()) &&
                    <p className="calendar-date-selected">{ `${calendar.dateSelected.getDate()} ${months[calendar.dateSelected.getMonth()]} ${calendar.dateSelected.getFullYear()}` }</p>
                }
                <button aria-label="button reset date" className="button-modal calendar-button calendar-button-reset" onClick={handleClickReset}><BiCalendar/> Today</button>    
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