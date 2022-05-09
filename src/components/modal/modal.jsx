import "../modal/css/modal.css";
import PropTypes from 'prop-types';
import SaveButton from '../../components/SaveButton';
import CloseIcon from '@mui/icons-material/Close';
import "../modal/css/grid.css";
import Header from '../header/header';


//destructuración-manda datos
<<<<<<< HEAD
const Modal = ({ children, isOpen, closeModal, size, backgroundColor, borderRadius, modeDark, title, ...props }) => {
=======
const Modal = ({ children, isOpen, closeModal, size, backgroundColor, borderRadius, modeLoD, title, ...props }) => {
>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  const radius = borderRadius && 'storybook-modal--border-radius';
  const mode = modeDark ? 'storybook-modal--dark' : 'storybook-modal--light';

  return (
      //clase dinamica
    <div onClick={closeModal} className={`modal ${isOpen && "is-open"}`} >
<<<<<<< HEAD
      <div onClick={handleModalContainerClick} className={['modal-container',`storybook-modal--${size}`, mode, radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
        <Header label={title} closeModal={closeModal}/>
=======
      <div onClick={handleModalContainerClick}
      className={['modal-container',`storybook-modal--${size}`, mode, radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props}>
        <Header label={title && title || ''} closeModal={closeModal}/>
>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
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
<<<<<<< HEAD
  modeDark: PropTypes.bool,
  isOpen: PropTypes.bool
=======
  modeLoD: PropTypes.bool
>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
};

Modal.defaultProps = {
  title: 'Modal',
  borderRadius: false,
  backgroundColor: null,
<<<<<<< HEAD
  modeDark: false,
  isOpen: true
=======
  modeLoD: true
  
>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
};