import * as React from "react";
import PropTypes from 'prop-types';
import AOS from "aos";
import '../css/saveButton.css';

const SaveButton = ({ beforeSave, backgroundColor, size, label, borderRadius,onClick, ...props}) => {
  const mode = beforeSave ? 'storybook-button--beforeSave' : 'storybook-button--afterSave';
  const radius = borderRadius && 'storybook-button--border-radius';
  function Prueba() {
    console.log("Saved!");
  }
  return (
    <div>
      <button variant="contained" data-aos="zoom-in"
      onClick={Prueba}
      role="button"
      className={['storybook-button', `storybook-button--${size}`, mode, radius].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      >
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SaveButton.defaultProps = {
  borderRadius: false,
  backgroundColor: null,
  beforeSave: false,
  size: 'medium',
  onClick: undefined,
  label: 'save'
};



AOS.init();
