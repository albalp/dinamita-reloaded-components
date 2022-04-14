import * as React from "react";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import AOS from "aos";
import '../css/saveButton.css';

const SaveButton = ({ beforeSave, backgroundColor, size, label, ...props }) => {
  const mode = beforeSave ? 'storybook-button--beforeSave' : 'storybook-button--afterSave';
  return (
    <div>
      <button variant="contained" data-aos="zoom-in"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
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
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SaveButton.defaultProps = {
  backgroundColor: null,
  beforeSave: false,
  size: 'medium',
  onClick: undefined,
};


AOS.init();
