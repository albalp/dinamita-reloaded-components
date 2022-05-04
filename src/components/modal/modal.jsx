import "../modal/css/modal.css";
import PropTypes from 'prop-types';
import SaveButton from '../../components/SaveButton';
import CloseIcon from '@mui/icons-material/Close';
import "../modal/css/grid.css";
import Header from '../header/header';


//destructuración-manda datos
const Modal = ({ children, isOpen, closeModal, size, backgroundColor, borderRadius, modeLoD, ...props }) => {
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  const radius = borderRadius && 'storybook-modal--border-radius';
  const mode = modeLoD ? 'storybook-modal--light' : 'storybook-modal--dark';

  return (
      //clase dinamica
    <div onClick={closeModal} className={`modal ${isOpen && "is-open"}`} >
      <div onClick={handleModalContainerClick}
      className={['modal-container',`storybook-modal--${size}`, mode, radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
        <Header label="Create Activity" closeModal={closeModal}/>
        <div className="grid">
          <div className="column">
            {children}
            <div className="row"></div>
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
  modeLoD: PropTypes.bool,
  isOpen: PropTypes.bool
};

Modal.defaultProps = {
  borderRadius: false,
  backgroundColor: null,
  modeLoD: true,
  isOpen: true
};