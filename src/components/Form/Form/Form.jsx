import PropTypes from 'prop-types';
import './form.css';

const Form = ({ variant, title, size, buttonSize, buttonPosition, buttonWidth, buttonRounded, valid, labelButton, alert, shadow, dark, className, borderRadius, backgroundColor, search, text, children, buttonComponent, ...props}) => {

  return (
    <>
    {/* If no exist the search property then render the form component default variant */}
      {!search && 
        <form {...props} data-label="form" className={`form form-size--${size} ${dark && 'dark'} ${shadow && 'shadow'} ${borderRadius && borderRadius} ${className && className} `} style={backgroundColor && { backgroundColor }}>
            <h2 className="form-title">{title && title}</h2>
            <p className="form-text">{text && text}</p>
            <div className={`form-inputs-container form-variant--${variant}`}>
                {children}
            </div>
            <div className={`form-footer form-button-position--${buttonPosition}`}>
              {buttonComponent ? buttonComponent : <button className={`form-button form-button-size--${buttonSize} form-button-width--${buttonWidth} ${buttonRounded && 'rounded'}`}>{labelButton ? labelButton : 'Ok'}</button>}
            </div>
            {alert && <div className={`form-alert ${!valid && valid !== null && 'activated' }`}>{alert}</div>}
        </form>
    }

    {/* If exist the search property then render the form component search variant */}
    {search && 
      <form {...props} data-label="form" className={`form form-size--${size} ${dark && 'dark'} ${shadow && 'shadow'} ${borderRadius && borderRadius} ${className && className} ${search && 'search'} `} style={backgroundColor && { backgroundColor }}>
        <div className={`form-inputs-container form-variant--${variant}`}>
            {children}
        </div>
        {buttonComponent ? buttonComponent : <button className={`form-button form-button-size--${buttonSize} form-button-width--${buttonWidth} ${buttonRounded && 'rounded'}`}>{labelButton ? labelButton : 'Search'}</button>}
        {alert && <div className={`form-alert ${!valid && valid !== null && 'activated' }`}>{alert}</div>}
      </form>
    }
    </>
  );
}

export default Form;

// Defining component properties

Form.propTypes = {
    variant: PropTypes.oneOf(['flex', 'grid', 'default']),
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
    buttonSize: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
    buttonWidth: PropTypes.oneOf(['small', 'medium', 'large', 'allWidth', 'default']),
    buttonPosition: PropTypes.oneOf(['left', 'center', 'right', 'default']),
    labelButton: PropTypes.string,
    alert: PropTypes.string,
    shadow: PropTypes.bool,
    search: PropTypes.bool,
    borderRadius: PropTypes.bool,
    dark: PropTypes.bool,
    valid: PropTypes.bool,
    buttonRounded: PropTypes.bool,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    buttonComponent: PropTypes.string,
    onSubmit: PropTypes.func
  };

  // Defining default properties of the Form component
  Form.defaultProps = {
    variant: 'flex',
    title: '',
    size: 'default',
    buttonPosition: 'default',
    buttonSize: 'medium',
    buttonWidth: 'default',
    labelButton: '',
    text: '',
    shadow: true,
    alert: null,
    valid: null,
    borderRadius: false,
    search: false,
    dark: false,
    buttonRounded: false,
    backgroundColor: null,
    buttonComponent: null,
    onSubmit: undefined
  };