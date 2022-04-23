import { useModal } from "./useModal";
import Modal from "./modal";
import Column from "./column";
import Row from "./row";

const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <h2>Modal</h2>
      <button onClick={openModal}>Click to open modal</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <Column>
          <h3>Create activity</h3>
          <p>All the options will be showed here</p>
        </Column>
        <Column>
          <Row>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
          </Row>
          <Row>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
          </Row>
          <Row>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
          </Row>
        </Column>
      </Modal>
    </div>
  );
};

export default Modals;
