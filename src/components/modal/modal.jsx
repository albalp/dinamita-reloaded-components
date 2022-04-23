import "../modal/css/modal.css";
import SaveButton from '../../components/saveButton';
import CloseIcon from '@mui/icons-material/Close';

//destructuración-manda datos
const Modal = ({ children, isOpen, closeModal }) => {
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
      //clase dinamica
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal} >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <SaveButton className="modal-close" onClick={closeModal} icon={<CloseIcon/>}  />
            {children}
      </div>
    </div>
  );
};

export default Modal;