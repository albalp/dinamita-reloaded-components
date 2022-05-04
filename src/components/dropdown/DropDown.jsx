import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useDetectOutsideClick } from './useDetectOutsideClick';

import './dropDown.css';

const Dropdown = ( {title, options, icon, size, border}  ) => {
  // Initial state for the option list
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick(ref ,false);
  // Initial state for the input
  const [selectedOption, setSelectedOption] = useState(options && options.length > 0 ? options[0].name : 'No options found');
  const [query, setQuery] = useState('');
  // function what change the state of the list
  const toggling = () => setIsOpen(!isOpen);
  // function for change the value of the input and close the list
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setQuery("");
  };

  const filter = (opts) => {
    return opts.filter(
      (opt) => opt.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  };

  const displayValue = () => {
    if(query.length > 0) return query;
    if(selectedOption) return selectedOption;
    return '';
  }

  return (
    <div >
      <p>{title}</p>
      <div className={`dropdown-size--${size} dropdown ${isOpen ? 'active' : ''} ${border && 'border'}`}>
        <div onClick={toggling} className="select">
            <input 
            ref={ref}
            type="text" 
            className="input-option" 
            placeholder={selectedOption}
            value={displayValue()}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedOption('');
              //onChange(null);
            }}/>
          {icon}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options && options.length > 0 
            ? filter(options).map((option) =>(
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'all']),
  border: PropTypes.bool,
}

Dropdown.defaultProps = {
  title: '',
  options: []
}