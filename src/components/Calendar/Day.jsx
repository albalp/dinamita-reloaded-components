import React from 'react'

const Day = ({ handleClick, day }) => {

    let classDay = '';

    if(day === calendar.currentDay && monthNumber === currentDate.getMonth() && calendar.year === currentDate.getFullYear()) {
        classDay = 'calendar-month-day--active';
    }else if(calendar.dateSelected && day === calendar.dateSelected.getDate() && monthNumber === calendar.dateSelected.getMonth()) {
        classDay = 'calendar-month-day--selected';
    }else {
        classDay = '';
    }
    

  return (
      
    <div onClick={handleClick} className={` calendar-month-day calendar-month-day--${variant} ${classDay}`}>{day}</div>
    
  )
}

export default Day
