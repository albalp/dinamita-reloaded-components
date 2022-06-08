import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { BiCaretDown } from "react-icons/bi";
import { useDetectOutsideClick } from './useDetectOutsideClick';

import './dropDown.css';

const Dropdown = ( {title, options, icon, size, borderRadius, dark, light}  ) => {
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
    <div className={`dropdown-container ${dark && 'dark'} ${light && 'light'}`}>
      <p>{title}</p>
      <div className={`dropdown-size--${size} dropdown ${isOpen ? 'active' : ''} ${borderRadius && 'borderRadius'}`}>
        <div role="menu" aria-label={`dropdown-${title.toLowerCase()}`} onClick={toggling} className="select">
            <input 
            ref={ref}
            type="text" 
            className="input-option input-modal" 
            placeholder={selectedOption}
            value={displayValue()}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedOption('');
              //onChange(null);
            }}/>
          {icon && icon}
        </div>
        <ul role="group" aria-label={`group-options-${title.toLowerCase()}`} className={`dropdown-menu ${isOpen && 'dropdown-menu--activated'}`}>
            {options && options.length > 0 
            ? filter(options).map((option) =>(
              <li role="menuitem" aria-label={`menuitem-${option.name.toLowerCase()}`} key={option.id} onClick={onOptionClicked(option.name)}>
                {option.name}
              </li>
            ))
            : <span>No options found</span>
            }
          </ul>
    
      </div>
    </div>
  )
}

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'all']),
  borderRadius: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  icon: PropTypes.element
}

Dropdown.defaultProps = {
  title: '',
  borderRadius: false,
  dark: false,
  light: false,
  icon: <BiCaretDown/>,
  options: [
    {
      id:'', 
      name: '',
    },
    {
      id:'', 
      name: '',
    },
    {
      id:'', 
      name: '',
    }
 ]
}