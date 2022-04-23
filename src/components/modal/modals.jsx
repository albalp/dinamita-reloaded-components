import { useModal } from "./useModal";
import Modal from "./modal";
import Column from "./column";
import Row from "./row";
import SaveButton from '../../components/saveButton';


const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <SaveButton label="Click to open modal" onClick={openModal} variant="primary" />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <Column>
          <h3>Calendar</h3>
          <p>The calendar will be showed here</p>
        </Column>
        <Column>
        <h3>Form</h3>
          <p>All the inputs will be showed here</p>
          <Row>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
          </Row>
          <Row>
            <img src="https://placeimg.com/400/400/nature" alt="Nature" />
          </Row>
          <Row>
            <img src="https://placeimg.com/400/400/people" alt="People" />
          </Row>
        </Column>
      </Modal>
    </div>
  );
};

export default Modals;
