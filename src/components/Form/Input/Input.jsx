import PropTypes from 'prop-types';
import './input.css';

const Input = ({ icon, rounded, size, width, dark, light, secondary, secondaryPlaceholder, label, onChange, className, valid, legend, ...props }) => {

  // Function to handle the value of the component when be the secondary variant
  // Function to execute the function passed like property
  const handleChange = (e) => {

    // If the element value is not empty then adding the activated class to placeholder animation
    if(e.target.value !== '') {
      e.target.classList.add('activated');
      
    } else {
      // If the element value is empty then removing the activated class to placeholder animation
      e.target.classList.remove('activated');
    }

    // I exist the function onChange then execute it
    if(onChange) onChange(e);
  }

  return (
   <>
   {/* If no exist the secondary and label properties then render the input component default variant */}
     {!secondary && !label &&
      <div data-testid="input-default" className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'}`}>
          <div className={`input-content input-content-size--${size} `}>
            <input {...props} onChange={handleChange}  className={`input-control input-modal ${icon && 'input-control--icon'} ${rounded && 'rounded'}  ${className && className}`} autoComplete="off"/>
            {icon}
          </div>
          {legend && 
            <span className={`input-container-legend ${rounded && 'rounded'} ${!valid && valid !== null && 'activated' } `} >{legend}</span>
          }
      </div>
     }
    
    {/* If exist the secondary property and is not exist the label property then render the input component secondary variant */}
    {secondary && !label &&
      <div data-testid="input-secondary" className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'}`}>
        <div className={`input-content input-content-size--${size} `}>
          <input {...props} onChange={handleChange}  className={`input-control input-modal ${rounded && 'rounded'} ${secondary && 'input-control-variant--secondary'}`} autoComplete='off'/>
          <label htmlFor="">{secondaryPlaceholder}</label>
        </div>
        {legend &&
          <span className={`input-container-legend ${rounded && 'rounded'} ${!valid && valid !== null && 'activated' } `}>{legend}</span>
        }
      </div>
    }

    {/* If exist the label property and is not exist the secondary property then render the input component label variant */}
    {label && !secondary &&
        <div data-testid="input-label" className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'} ${label && 'input-control-variant--label'}`}>
          <label htmlFor={label.toLowerCase()}>{label}:</label>
            <div className={`input-content input-content-size--${size} `}>
              <input id={label.toLowerCase()} {...props} onChange={handleChange}  className={`input-control input-modal ${rounded && 'rounded'} ${className && className}`} autoComplete="off"/>
              {icon}
            </div>
            {legend && 
            <span className={`input-container-legend ${rounded && 'rounded'} ${!valid && valid !== null && 'activated' } `} >{legend}</span>
            }
        </div>
      }
    </>
  )
}

export default Input;

// Defining component properties
Input.propTypes = {
  rounded: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large', 'all']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  dark: PropTypes.bool,
  light: PropTypes.bool,
  valid: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryPlaceholder: PropTypes.string,
  legend: PropTypes.string,
  onChange: PropTypes.func
};

// Defining default properties of the Input component
Input.defaultProps = {
  rounded: false,
  width: 'all',
  size: 'medium',
  dark: false,
  light: false,
  valid: null,
  secondary: false,
  secondaryPlaceholder: null,
  legend: null,
  onChange: null
};