import { useState } from 'react';
import PropTypes from 'prop-types';

import './dropdown.css';

const Dropdown = ( {title, options, icon}  ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div >
      <p>{title}</p>
      <ul className={`dropdown ${isOpen ? 'active' : ''}`}>
        <li onClick={toggling} className="select">
          {options.length > 0 
            ? <input 
            type="text" 
            className="input-option" 
            placeholder={selectedOption}></input>
            :<span>No options found</span>
            }
          {icon}
        </li>
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
      </ul>
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
}