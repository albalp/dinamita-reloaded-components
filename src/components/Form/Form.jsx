import PropTypes from 'prop-types';
import "../../css/form.css";

const Form = ({ variant, title, size, labelButton, alert, shadow, dark, backgroundImage, gradientColor, className, borderRadius, backgroundColor, text, children}) => {

    const backgroundImageStyles = {
            background: `${gradientColor ? `linear-gradient(${gradientColor}, ${gradientColor})` : 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}, url(${backgroundImage && backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: backgroundColor
        };

  return (
    <form className={`form form-size--${size} ${dark && 'dark'} ${shadow && shadow} ${borderRadius && borderRadius} ${className && className} ${backgroundImage && 'backgroundImage'}`} style={(backgroundImage && backgroundImageStyles) || (backgroundColor && backgroundImageStyles)}>
      <h2 className="form-title">{title ? title : 'Login'}</h2>
      <p className="form-text">{text && text}</p>
      <div className={`form-inputs-container form-variant--${variant}`}>
          {children}
      </div>
      <div className="form-footer">
         <button className="form-button">{labelButton ? labelButton : 'Ok'}</button>
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
    backgroundImage: PropTypes.string,
    gradientColor: PropTypes.string,
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
    backgroundImage: null,
    gradientColor: null,
    backgroundColor: null,
    onSubmit: undefined
  };