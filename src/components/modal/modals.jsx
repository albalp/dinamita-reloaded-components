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
          <Row>
            <img style={{height: '200px', width:'250px'}} src="https://img.freepik.com/vector-gratis/plantilla-diseno-calendario-ano-nuevo-moderno-2022_1017-34368.jpg?w=2000" alt="Calendar" />
          </Row>
        </Column>
        <Column>
        <h3>Form</h3>
          <p>All the inputs will be showed here</p>
          <Row>
            <label>Ingresar nombre</label>
            <input placeholder="Juanito" style={{borderColor:'black', height: '30px'}}/>
          </Row>
          <Row>
            <label>Ingresar apellido</label>
            <input placeholder="Perez" style={{borderColor:'black', height: '30px'}}/>
          </Row>
          <Row>
            <label>Ingresar edad</label>
            <input placeholder="21" style={{borderColor:'black', height: '30px'}}/>
          </Row>
          <Row>
            <Column>
              <Row>
                <SaveButton label="Guardar" onClick={openModal} variant="primary" />
              </Row>
            </Column>
          </Row>
        </Column>
      </Modal>
    </div>
  );
};

export default Modals;
