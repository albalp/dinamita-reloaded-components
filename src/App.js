import AOS from "aos";
import SaveButton from './components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Modals from './components/modal/modals';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>
      <SaveButton variant="success" label="Guardar" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
      <Modals />
    </div>
  );
}

export default App;

AOS.init();