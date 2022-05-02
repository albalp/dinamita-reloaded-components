import PropTypes from 'prop-types';
import '../../css/checkbox.css';

const Checkbox = ({ label, rounded, size, secondary, tertiary, ...props }) => {
  return (
    
    <>
        {!secondary && !tertiary &&
            <div className={`checkbox-container ${rounded && 'rounded'} checkbox-container-size--${size} `}>
                <input id={label && label.toLowerCase()} className="checkbox-control" type="checkbox" {...props} />
                <span className="checkbox-figure"></span>
                <label className="checkbox-label" htmlFor={label && label.toLowerCase()}>{label}</label>
            </div>
        }

        {!tertiary && secondary &&
            <div className={`checkbox-container ${rounded && 'rounded'} checkbox-container-size--${size} ${secondary && 'secondary'}`}>
                <input id={label && label.toLowerCase()} className="checkbox-control" type="checkbox" {...props} />
                <label className="checkbox-label" htmlFor={label && label.toLowerCase()}>{label}</label>
                <span className="checkbox-label-secondary">{label}</span>
            </div>
        }

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

Checkbox.propTypes = {
    label: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    onChange: PropTypes.func
  };

  Checkbox.defaultProps = {
    label: null,
    rounded: false,
    size: 'medium',
    secondary: false,
    tertiary: false,
    onChange: null
  };