import "../modal/css/modal.css";
import PropTypes from 'prop-types';
import SaveButton from '../../components/SaveButton';
import CloseIcon from '@mui/icons-material/Close';
import "../modal/css/grid.css";
import Header from '../header/header';


//destructuración-manda datos
const Modal = ({ children, isOpen, closeModal, size, backgroundColor, borderRadius, modeDark, title, ...props }) => {
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  const radius = borderRadius && 'storybook-modal--border-radius';
  const mode = modeDark ? 'storybook-modal--dark' : 'storybook-modal--light';

  return (
      //clase dinamica
    <div onClick={closeModal} className={`modal ${isOpen && "is-open"}`} >
      <div onClick={handleModalContainerClick} className={['modal-container',`storybook-modal--${size}`, mode, radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
        <Header label={title} closeModal={closeModal}/>
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
  title: PropTypes.string,
  borderRadius: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  modeDark: PropTypes.bool,
  isOpen: PropTypes.bool
};

Modal.defaultProps = {
  title: 'Modal',
  borderRadius: false,
  backgroundColor: null,
  modeDark: false,
  isOpen: true
};