import "./modal.css";

//destructuración-manda datos
const Modal = ({ children, isOpen, closeModal }) => {
    //Para que no se cierre cuando se de click dentro del modal
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
      //clase dinamica
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal} >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;