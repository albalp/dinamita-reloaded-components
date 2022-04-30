import PropTypes from 'prop-types';
import '../../css/input.css';

const Input = ({ icon, rounded, size, width, dark, secondary, secondaryPlaceholder, ...props }) => {
  return (
   <>
     {!secondary && 
      <div className={`input-container input-container-width--${width}`}>
          <div className={`input-content input-content-size--${size} `}>
            <input {...props} className={`input-control ${icon && 'input-control--icon'} ${rounded && 'rounded'} ${dark && 'dark'}`} />
            {icon}
          </div>
          <span className={`input-container-legend ${rounded && 'rounded'} `} >Invalid value</span>
      </div>
     }
    
    {secondary && 
      <div className={`input-container input-container-width--${width}`}>
        <div className={`input-content input-content-size--${size} `}>
          <input {...props} className={`input-control ${rounded && 'rounded'} ${dark && 'dark'} ${secondary && 'input-control-variant--secondary'}`} />
          <label htmlFor="">{secondaryPlaceholder}</label>
        </div>
        <span className={`input-container-legend ${rounded && 'rounded'} `} >Invalid value</span>
      </div>
    }
   </>
  )
}

export default Input;

Input.propTypes = {
  icon: PropTypes.string,
  rounded: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large', 'all']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  dark: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryPlaceholder: PropTypes.string
};

Input.defaultProps = {
  icon: null,
  rounded: false,
  width: 'all',
  size: 'medium',
  dark: false,
  secondary: false,
  secondaryPlaceholder: null
};