import PropTypes from 'prop-types';
import AOS from "aos";
import '../css/saveButton.css';

const SaveButton = ({ beforeSave, backgroundColor, size, label, borderRadius, handleClick, variant,  icon , ...props}) => {
  const mode = beforeSave ? 'storybook-button--beforeSave' : 'storybook-button--afterSave';
  const radius = borderRadius && 'storybook-button--border-radius';

  return (
    <div>
      <button onClick={handleClick} variant="contained" data-aos="zoom-in" role="button" className={[ 'storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`, mode, radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
        {icon && icon}
        {label}
      </button>
    </div>
  );
};

export default SaveButton;

SaveButton.propTypes = {
  beforeSave: PropTypes.bool,
  borderRadius: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'default']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

SaveButton.defaultProps = {
  borderRadius: false,
  beforeSave: false,
  backgroundColor: null,
  size: 'medium',
  variant: 'default',
  label: '',
  disabled: false,
  onClick: undefined
};

AOS.init();
