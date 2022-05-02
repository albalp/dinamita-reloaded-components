import PropTypes from 'prop-types';
import "../../css/form.css";

const Form = ({ variant, title, size, buttonSize, buttonPosition, buttonWidth, buttonRounded, labelButton, alert, shadow, dark, className, borderRadius, backgroundColor, search, text, children, buttonComponent, ...props}) => {

  return (
    <>
      {!search && 
        <form {...props} role="form" data-label="form" className={`form form-size--${size} ${dark && 'dark'} ${shadow && 'shadow'} ${borderRadius && borderRadius} ${className && className} `} style={backgroundColor && { backgroundColor }}>
            <h2 className="form-title">{title && title}</h2>
            <p className="form-text">{text && text}</p>
            <div className={`form-inputs-container form-variant--${variant}`}>
                {children}
            </div>
            <div className={`form-footer form-button-position--${buttonPosition}`}>
              {buttonComponent ? buttonComponent : <button className={`form-button form-button-size--${buttonSize} form-button-width--${buttonWidth} ${buttonRounded && 'rounded'}`}>{labelButton ? labelButton : 'Ok'}</button>}
            </div>
            {alert && <div className="form-alert ">{alert}</div>}
        </form>
    }

    {search && 
      <form {...props} role="form" data-label="form" className={`form form-size--${size} ${dark && 'dark'} ${shadow && 'shadow'} ${borderRadius && borderRadius} ${className && className} ${search && 'search'} `} style={backgroundColor && { backgroundColor }}>
        <div className={`form-inputs-container form-variant--${variant}`}>
            {children}
        </div>
        {buttonComponent ? buttonComponent : <button className={`form-button form-button-size--${buttonSize} form-button-width--${buttonWidth} ${buttonRounded && 'rounded'}`}>{labelButton ? labelButton : 'Search'}</button>}
        {alert && <div className="form-alert">{alert}</div>}
      </form>
    }
    
    </>
  );
}

export default Form;

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
    borderRadius: PropTypes.bool,
    dark: PropTypes.bool,
    buttonRounded: PropTypes.bool,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    buttonComponent: PropTypes.string,
    onSubmit: PropTypes.func
  };

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
    borderRadius: false,
    dark: false,
    buttonRounded: false,
    backgroundColor: null,
    buttonComponent: null,
    onSubmit: undefined
  };