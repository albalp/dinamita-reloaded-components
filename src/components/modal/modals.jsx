import { useModal } from "./useModal";
import Modal from "./modal";

const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(true);

  return (
    <div>
      <h2>Modal</h2>
      <button onClick={openModal}>Click to open modal</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Create activity</h3>
        <p>All the options will be showed here</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
    </div>
  );
};

export default Modals;