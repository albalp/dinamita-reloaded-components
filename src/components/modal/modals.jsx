import { useModal } from "../modal/useModal";
import Modal from "./modal";
import SaveButton from '../../components/saveButton';

const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <SaveButton label="Click to open modal" onClick={openModal} variant="primary" />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div>
          <div><h3>Calendar</h3></div>
          <div><p>The calendar will be showed here</p></div>
          <div><img style={{height: '200px', width:'250px'}} src="https://img.freepik.com/vector-gratis/plantilla-diseno-calendario-ano-nuevo-moderno-2022_1017-34368.jpg?w=2000" alt="Calendar" /></div>
        </div>
        <div>
          <div><h3>Form</h3></div>
          <div><p>All the inputs will be showed here</p></div>
          <div><label>Ingresar nombre</label></div>
          <div>
            <input placeholder="Juanito" style={{borderColor:'black', height: '30px'}}/>
          </div>
          <div>
          <label>Ingresar apellido</label></div>
          <div>
            <input placeholder="Perez" style={{borderColor:'black', height: '30px'}}/>
          </div>
          <div>
          <label>Ingresar edad</label></div>
          <div>
            <input placeholder="21" style={{borderColor:'black', height: '30px'}}/>
          </div>
          <div>
          <SaveButton label="Guardar" onClick={openModal} variant="primary" />
          </div>  
        </div>
      </Modal>
    </div>
  );
};

export default Modals;