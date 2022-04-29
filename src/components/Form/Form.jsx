import PropTypes from 'prop-types';
import "../../css/form.css";

const Form = ({ variant, title, size, labelButton, alert, shadow, dark, className, borderRadius, backgroundColor, text, children, buttonComponent}) => {

  return (
    <form className={`form form-size--${size} ${dark && 'dark'} ${shadow && 'shadow'} ${borderRadius && borderRadius} ${className && className}`} style={backgroundColor && { backgroundColor }}>
      <h2 className="form-title">{title ? title : 'Login'}</h2>
      <p className="form-text">{text && text}</p>
      <div className={`form-inputs-container form-variant--${variant}`}>
          {children}
      </div>
      <div className="form-footer">
         {buttonComponent ? buttonComponent : <button className="form-button">{labelButton ? labelButton : 'Ok'}</button>}
      </div>
      {alert && <div className="form-alert ">{alert}</div>}
    </form>
  );
}

export default Form;

Form.propTypes = {
    variant: PropTypes.oneOf(['flex', 'grid', 'default']),
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
    labelButton: PropTypes.string,
    alert: PropTypes.string,
    shadow: PropTypes.bool,
    borderRadius: PropTypes.bool,
    dark: PropTypes.bool,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func
  };

  Form.defaultProps = {
    variant: 'flex',
    title: '',
    size: 'default',
    labelButton: '',
    text: '',
    shadow: true,
    alert: null,
    borderRadius: false,
    dark: false,
    backgroundColor: null,
    onSubmit: undefined
  };