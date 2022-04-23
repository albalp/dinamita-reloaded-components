import { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from './SaveButton';
import '../css/calendar.css';

const Calendar = function ({dark, shadow, backgroundColor, size, variant}) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    
    const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [currentDay, setCurrentDay] = useState(currentDate.getDate());
    const [daysMonth, setDaysMonth] = useState([]);
    const [beforeDaysMonth, setBeforeDaysMonth] = useState([]);
    const [dateSelected, setDateSelected] = useState({day: null, date: null});

    const [calendar, setCalendar] = useState({
        year: currentDate.getFullYear(),
        monthNumber: currentDate.getMonth(),
        currentDay: currentDate.getDate(),
        daysMonth: [],
        daySelected: null,
        dateSelected: null
    })

    let days = [];
    let daysBefore = [];

    useEffect(() => {
        getTotalDays(monthNumber);
    }, [monthNumber]);

    const prevMonth = () => {
        if(monthNumber !== 0) {

            setMonthNumber(monthNumber - 1);

        } else {

            setMonthNumber(11);
            setYear(year - 1);

        }
    }
        
    const nextMonth = () => {
        if(monthNumber !== 11) {

            setMonthNumber(monthNumber + 1);

        } else {

            setMonthNumber(0);
            setYear(year + 1);

        }
    }

    const startDay = () => {
        let start = new Date(year, monthNumber, 1);
        return ((start.getDay() - 1) === -1) ? 6 : start.getDay()-1;
    }

    const getTotalDays = (month) => {
        
        if(month === -1) month = 11;

        if(month === 0 || month === 2 ||  month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
            
            for(let i = 1; i <= 31; i++) {
                days.push(i);
                setDaysMonth(days);
            }
        
        } else if (month === 3 || month === 5 || month === 8 || month === 10) {
            
            for(let i = 1; i <= 30; i++) {
                days.push(i);
                setDaysMonth(days);
            }
        } else {
            let monthLeap = isLeap();

            if(monthLeap) {
                for(let i = 1; i <= 29; i++) {
                    days.push(i);
                    setDaysMonth(days);
                }
            } else {
                for(let i = 1; i <= 28; i++) {
                    days.push(i);
                   setDaysMonth(days);
                }
            }
        }

        for(let i = startDay(); i > 0; i--) {
            daysBefore.push(i);
            setBeforeDaysMonth(daysBefore);
        }
    }

    const selectDate = (e) => {
        
        let newDate = new Date(year, monthNumber, parseInt(e.target.textContent));

        setDateSelected({
            ...dateSelected,
            day: parseInt(e.target.textContent),
            date: newDate
        });
    };

    const isLeap = () => (((year % 100 !== 0) && (year % 4 === 0)) || (year % 400 === 0));

    return (
        <div className={`calendar ${shadow && 'calendar--shadow'} ${dark && 'calendar--dark'} calendar-size--${size}`} style={backgroundColor && { backgroundColor }}>
            <div className="calendar-header">
                <div className="calendar-header-date">
                    <h3 className="calendar-header-date-month">{months[monthNumber]}</h3>
                    <p className="calendar-header-date-year">{year}</p>
                </div>
                <div className="calendar-header-actions">
                    <Button onClick={prevMonth} shadow={dark ? false : true} icon={<BiChevronLeft/>} size="small"  borderRadius/>
                    <Button onClick={nextMonth} shadow={dark ? false : true} icon={<BiChevronRight/>} size="small" borderRadius/>
                </div>
            </div>
            <div className="calendar-week">
                <div className="calendar-week-day">Mon</div>
                <div className="calendar-week-day">Tues</div>
                <div className="calendar-week-day">Wed</div>
                <div className="calendar-week-day">Thurs</div>
                <div className="calendar-week-day">Frid</div>
                <div className="calendar-week-day">Sat</div>
                <div className="calendar-week-day">Sund</div>
            </div>
            
            <div className="calendar-month">

                {
                    beforeDaysMonth.map(beforeDay => <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--before`}>{beforeDay}</div>)
                }
                
                {
                    daysMonth.map(day => (
                        day === currentDay && monthNumber === currentDate.getMonth()
                        ? <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--active`}>{day}</div>
                        : day === dateSelected.day && dateSelected.date && monthNumber === dateSelected.date.getMonth()
                            ? <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--selected`}>{day}</div>
                            : <div key={uuidv4()} onClick={selectDate} className={` calendar-month-day calendar-month-day--${variant}`}>{day}</div>
                    ))
                }
            </div>
            {/* <span>You are selecting a date different to current</span> */}
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