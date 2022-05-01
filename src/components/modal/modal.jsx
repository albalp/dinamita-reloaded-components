import "../modal/css/modal.css";
import PropTypes from 'prop-types';
import SaveButton from '../../components/saveButton';
import CloseIcon from '@mui/icons-material/Close';
import "../modal/css/grid.css";

//destructuración-manda datos
const Modal = ({ children, isOpen, closeModal, size, backgroundColor, borderRadius, variant, ...props }) => {
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  const radius = borderRadius && 'storybook-modal--border-radius';

  return (
      //clase dinamica
      //
    <div onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div 
      className={['modal-container',`storybook-modal--${size}`, `storybook-modal--${variant}`,radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}
      onClick={handleModalContainerClick}>
        <SaveButton className="modal-close" onClick={closeModal} icon={<CloseIcon/>}  />
        <div className="column">
        {children}
          <div className="row">
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  borderRadius: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['light', 'dark']),
};

Modal.defaultProps = {
  borderRadius: false,
  backgroundColor: null,
  size: 'small',
  variant: 'light'
};