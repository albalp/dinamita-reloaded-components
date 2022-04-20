import { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PropTypes from 'prop-types';
import Button from './SaveButton';
import '../css/calendar.css';

const Calendar = function ({dark, shadow, backgroundColor, size, variant}) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let currentDate = new Date();
    // let monthNumber = currentDate.getMonth();
    // let currentYear = currentDate.getFullYear();
    // let currentDay = currentDate.getDate();

    const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
    const [month, setMonth] = useState(months[monthNumber]);
    const [year, setYear] = useState(currentDate.getFullYear());
    const [currentDay, setCurrentDay] = useState(currentDate.getDate());

   

    return (
        <div className={`calendar ${shadow && 'calendar--shadow'} ${dark && 'calendar--dark'} calendar-size--${size}`} style={backgroundColor && { backgroundColor }}>
            <div className="calendar-header">
                <div className="calendar-header-date">
                    <h3 className="calendar-header-date-month">{month}</h3>
                    <p className="calendar-header-date-year">{year}</p>
                </div>
                <div className="calendar-header-actions">
                    <Button shadow={dark ? false : true} icon={<BiChevronLeft/>} size="small"  borderRadius/>
                    <Button shadow={dark ? false : true} icon={<BiChevronRight/>} size="small" borderRadius/>
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
                <div className={` calendar-month-day calendar-month-day--${variant}`}>1</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>2</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>3</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>4</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>5</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>6</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>7</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>8</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>9</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>10</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>11</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>12</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>13</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>14</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>15</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>16</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>17</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>18</div>
                <div className={` calendar-month-day calendar-month-day--${variant} calendar-month-day--active`}>19</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>20</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>21</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>22</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>23</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>24</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>25</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>26</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>27</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>28</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>29</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>30</div>
                <div className={` calendar-month-day calendar-month-day--${variant}`}>31</div>
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