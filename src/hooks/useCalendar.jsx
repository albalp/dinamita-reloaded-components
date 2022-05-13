import {useState, useEffect} from 'react'

export const useCalendar = () => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
    const [daysMonth, setDaysMonth] = useState([]);
    const [daysPreviousMonth, setDaysPreviousMonth] = useState([]);
    const days = [];
    const daysPrevious = [];
 
    const [calendar, setCalendar] = useState({
        year: currentDate.getFullYear(),
        currentDay: currentDate.getDate(),
        month: months[monthNumber],
        dateSelected: null
    });

    useEffect(() => {
        getTotalDays(monthNumber);
    }, [monthNumber]);

    const isLeap = () => (((calendar.year % 100 !== 0) && (calendar.year % 4 === 0)) || (calendar.year % 400 === 0));

    const startDay = () => {
        let start = new Date(calendar.year, monthNumber, 0);
        return start.getDay();
    }

    const fillArray = (amount) => {
        for(let i = 1; i <= amount; i++) {
            days.push(i);

            setDaysMonth(days);
        }
    }

    const getTotalDays = (month) => {

        let monthLeap = isLeap();
        
        switch(month) {

            case -1: month = 11;
            break;

            case 0: fillArray(31);
            break;

            case 2: fillArray(31);
            break;

            case 4: fillArray(31);
            break;

            case 6: fillArray(31);
            break;

            case 7: fillArray(31);
            break;

            case 9: fillArray(31);
            break;

            case 11: fillArray(31);
            break;

            case 3: fillArray(30);
            break;

            case 5: fillArray(30);
            break;

            case 8: fillArray(30);
            break;

            case 10: fillArray(30);
            break;

            case 1: {
                if(monthLeap) {
                    fillArray(29);
                }else{
                    fillArray(28)
                }
            }
            break;

            // default: return;
        }

        for(let i = startDay(); i >= 0; i--) {
            daysPrevious.push(i);

            setDaysPreviousMonth(daysPrevious);
        }
    }

    const selectDate = (e) => {
        
        let newDate = new Date(calendar.year, monthNumber, parseInt(e.target.textContent));

        setCalendar({
            ...calendar,
            dateSelected: newDate
        });
    };

    const resetDate = () => {
        setMonthNumber(currentDate.getMonth());
        setCalendar({
            ...calendar,
            dateSelected: null,
            year: currentDate.getFullYear(),
            month: months[monthNumber]
        })
    }

    const prevMonth = () => {
        if(monthNumber !== 0) {

            setMonthNumber(monthNumber - 1);

        } else {

            setMonthNumber(11);

            setCalendar({
                ...calendar,
                year: calendar.year - 1
            });

        }
    }

    const nextMonth = () => {
        if(monthNumber !== 11) {

            setMonthNumber(monthNumber + 1);

        } else {

            setMonthNumber(0);
            
            setCalendar({
                ...calendar,
                year: calendar.year + 1
            });

        }
    }

    return {
        months: months,
        calendar: calendar,
        monthNumber: monthNumber,
        currentDate: currentDate,
        daysMonth: daysMonth,
        daysPreviousMonth: daysPreviousMonth,
        prevMonth: prevMonth,
        nextMonth: nextMonth,
        resetDate: resetDate,
        selectDate: selectDate,
        isLeap: isLeap,
        getTotalDays: getTotalDays
    }
}
