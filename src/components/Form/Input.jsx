import PropTypes from 'prop-types';
import '../../css/input.css';

const Input = ({ icon, rounded, size, width, dark, light, secondary, secondaryPlaceholder, label, onChange, className, ...props }) => {

  const handleChange = (e) => {
    if(e.target.value !== '') {
      e.target.classList.add('activated');
      
    } else {
      e.target.classList.remove('activated');
    }
    if(onChange) onChange();
  }

  return (
   <>
     {!secondary && !label &&
      <div className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'}`}>
          <div className={`input-content input-content-size--${size} `}>
            <input {...props} onChange={handleChange}  className={`input-control ${icon && 'input-control--icon'} ${rounded && 'rounded'}  ${className && className}`} autoComplete="off"/>
            {icon}
          </div>
          <span className={`input-container-legend ${rounded && 'rounded'} `} >Invalid value</span>
      </div>
     }
    
    {secondary && 
      <div className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'}`}>
        <div className={`input-content input-content-size--${size} `}>
          <input {...props} onChange={handleChange}  className={`input-control ${rounded && 'rounded'} ${secondary && 'input-control-variant--secondary'}`} autoComplete='off'/>
          <label htmlFor="">{secondaryPlaceholder}</label>
        </div>
        <span className={`input-container-legend ${rounded && 'rounded'} `} >Invalid value</span>
      </div>
    }

  {label && !secondary &&
      <div className={`input-container input-container-width--${width} ${dark && 'dark'} ${light && 'light'} ${label && 'input-control-variant--label'}`}>
        <label htmlFor="">{label}:</label>
          <div className={`input-content input-content-size--${size} `}>
            <input {...props} onChange={handleChange}  className={`input-control ${rounded && 'rounded'} ${className && className}`} autoComplete="off"/>
            {icon}
          </div>
          <span className={`input-container-legend ${rounded && 'rounded'} `} >Invalid value</span>
      </div>
     }
   </>
  )
}

export default Input;

Input.propTypes = {
  rounded: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large', 'all']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  dark: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryPlaceholder: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  rounded: false,
  width: 'all',
  size: 'medium',
  dark: false,
  light: false,
  secondary: false,
  secondaryPlaceholder: null,
  onChange: null
};