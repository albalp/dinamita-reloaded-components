import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ label, rounded, size, secondary, tertiary, ...props }) => {
  return (
    
    <>
        {/* If not exist the secondary and tertiary properties then render the checkbox default variant */}
        {!secondary && !tertiary &&
            <div className={`checkbox-container ${rounded && 'rounded'} checkbox-container-size--${size} `}>
                <input id={label && label.toLowerCase()} className="checkbox-control" type="checkbox" {...props} />
                <span className="checkbox-figure"></span>
                <label className="checkbox-label" htmlFor={label && label.toLowerCase()}>{label}</label>
            </div>
        }

        {/* If exist the secondary property and is not exist the tertiary property then render the checkbox secondary variant */}
        {!tertiary && secondary &&
            <div className={`checkbox-container ${rounded && 'rounded'} checkbox-container-size--${size} ${secondary && 'secondary'}`}>
                <input id={label && label.toLowerCase()} className="checkbox-control" type="checkbox" {...props} />
                <label className="checkbox-label" htmlFor={label && label.toLowerCase()}>{label}</label>
                <span className="checkbox-label-secondary">{label}</span>
            </div>
        }

        {/* If exist the tertiary property and is not exist the secondary property then render the checkbox tertiary variant */}
        {!secondary && tertiary &&
            <div className={`checkbox-container ${rounded && 'rounded'} checkbox-container-size--${size} ${tertiary && 'tertiary'} `}>
                <input id={label && label.toLowerCase()} className="checkbox-control" type="checkbox" {...props} />
                <label className="checkbox-label" htmlFor={label && label.toLowerCase()}>{label}</label>
                <span className="checkbox-figure"></span>
            </div>
        }
    </>

  );
}

export default Checkbox;

// Defining component properties
Checkbox.propTypes = {
    label: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    onChange: PropTypes.func
  };

  // Defining default properties of the Checkbox component
  Checkbox.defaultProps = {
    label: null,
    rounded: false,
    size: 'small',
    secondary: false,
    tertiary: false,
    onChange: null
  };