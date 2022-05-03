import { useState } from 'react';
import PropTypes from 'prop-types';

import data from '../../api/mocks.json'

import './dropDown.css';

const Dropdown = ( {title, options, icon}  ) => {
  // Initial state for the option list
  const [isOpen, setIsOpen] = useState(false);
  // Initial state for the input
  const [selectedOption, setSelectedOption] = useState(options && options.length > 0 ? options[0].name : 'No options found');
  // function what change the state of the list
  const toggling = () => setIsOpen(!isOpen);
  // function for change the value of the input and close the list
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div >
      <p>{title}</p>
      <div className={`dropdown ${isOpen ? 'active' : ''}`}>
        <div onClick={toggling} className="select">
            <input 
            type="text" 
            className="input-option" 
            placeholder={selectedOption} />
          {icon}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options && options.length > 0 
            ? options.map((option) =>(
              <li key={option.id} onClick={onOptionClicked(option.name)}>
                {option.name}
              </li>
            ))
            : <span>No options found</span>
            }
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array, 
}

Dropdown.defaultProps = {
  title: '',
  options: []
}