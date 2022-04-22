//import PropTypes from 'prop-types';
import AOS from "aos";
import './modal.css';
import SaveButton from '../../components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Modal = () => {
    function Clicked(){
        console.log("Clicked!");
      }

  return (
    <div data-aos="zoom-in" className="modal-all">
        <SaveButton variant="success" label="Guardar" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
    </div>
  );
};

export default Modal;


AOS.init();
