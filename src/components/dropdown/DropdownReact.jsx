import { useState } from 'react';

import { MdArrowDropDown } from 'react-icons/md'

import './dropdownReact.css';

const DropdownReact = (  ) => {
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0].label);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    //console.log(selectedOption);
  };

  return (
    <div className="dropdown">
      <p>Project</p>
      <div onClick={toggling} className={`select ${isOpen ? 'active' : ''}`}>
        <input  type="text" className="input-option" placeholder={selectedOption}></input>
        <MdArrowDropDown />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {dropdownOptions.map(option =>(
            <li key={option.value} onClick={onOptionClicked(option.label)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownReact;