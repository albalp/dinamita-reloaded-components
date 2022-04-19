import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from './SaveButton';
import '../css/calendar.css';

const Calendar = function () {

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-header-date">
                    <h3 className="calendar-header-date-month">April</h3>
                    <p className="calendar-header-date-year">2022</p>
                </div>
                <div className="calendar-header-actions">
                    <Button icon={<BiChevronLeft/>} size="small"  borderRadius />
                    <Button icon={<BiChevronRight/>} size="small" borderRadius />
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
                <div className="calendar-month-day">1</div>
                <div className="calendar-month-day">2</div>
                <div className="calendar-month-day">3</div>
                <div className="calendar-month-day">4</div>
                <div className="calendar-month-day">5</div>
                <div className="calendar-month-day">6</div>
                <div className="calendar-month-day">7</div>
                <div className="calendar-month-day">8</div>
                <div className="calendar-month-day">9</div>
                <div className="calendar-month-day">10</div>
                <div className="calendar-month-day">11</div>
                <div className="calendar-month-day">12</div>
                <div className="calendar-month-day">13</div>
                <div className="calendar-month-day">14</div>
                <div className="calendar-month-day">15</div>
                <div className="calendar-month-day">16</div>
                <div className="calendar-month-day">17</div>
                <div className="calendar-month-day">18</div>
                <div className="calendar-month-day">19</div>
                <div className="calendar-month-day">20</div>
                <div className="calendar-month-day">21</div>
                <div className="calendar-month-day">22</div>
                <div className="calendar-month-day">23</div>
                <div className="calendar-month-day">24</div>
                <div className="calendar-month-day">25</div>
                <div className="calendar-month-day">26</div>
                <div className="calendar-month-day">27</div>
                <div className="calendar-month-day">28</div>
                <div className="calendar-month-day">29</div>
                <div className="calendar-month-day">30</div>
                <div className="calendar-month-day">31</div>
            </div>
        </div>
    );
}

export default Calendar;