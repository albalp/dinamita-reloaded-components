import AOS from "aos";
import SaveButton from './components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';

import Header from './components/header/header';
import TextArea from './components/textArea/textArea';

import Modals from './components/modal/modals';


function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>

      <Header variant="primary" />
      <TextArea />
      <SaveButton variant="success" label="Guardar" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
      <Modals />

    </div>
  );
}

export default App;

AOS.init();