import PropTypes from 'prop-types';
import '../css/saveButton.css';

const SaveButton = ({ beforeSave, backgroundColor, size, label, borderRadius, variant,  icon, shadow, className, ...props}) => {
  const mode = beforeSave ? 'storybook-button--beforeSave' : 'storybook-button--afterSave';
  const radius = borderRadius && 'storybook-button--border-radius';
  const shadowButton = shadow && 'storybook-button--shadow';

  return (
    <div>
      <button className={[ 'button-modal' ,'storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`, mode, radius, shadowButton,  className].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
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
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'default']),
  disabled: PropTypes.bool,
  shadow: PropTypes.bool,
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
  shadow: true,
  onClick: undefined
};