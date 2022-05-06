import { useState, useRef, useEffect } from 'react';

//import { useDetectOutsideClick } from './useDetectOutsideClick.js';

import { MdArrowDropDown } from 'react-icons/md'

import './dropdownOpt.css';

const DropdownOpt = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = (value) => { 
    setIsActive(!isActive)
    setSelected(value)
  };

  const dropdownOptions = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "The Color Blue",
      value: "blue",
    },
  ];
  const [selected, setSelected] = useState(dropdownOptions[0].label)

  const renderedOptions = dropdownOptions.map((option) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <li
        key={option.value}
        className="item"
        // on click change selection to current option
        onClick={(option) => {
          setSelected(option)
          onClick(option.label)
        }}
      >
        {option.label}
      </li>
    )
  })
  
  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e);
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
          setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
        window.removeEventListener('click', pageClickEvent);
    }
  
  }, [isActive]);

  return (
     <div className="menu-container">
       <span className="label">Project:</span>
       <div className="menu-trigger">
       <input 
       type="text" 
       placeholder={selected.label}
       onClick={onClick} 
       >
       </input>
       <MdArrowDropDown />
       </div>
       <ul ref={dropdownRef} className={`menu${isActive ? '-active' : '-inactive'}`} >
         {renderedOptions}
      </ul>
     </div>

  )
}

export default DropdownOpt;