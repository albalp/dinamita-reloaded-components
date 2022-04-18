import SaveButton from './components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>
      <SaveButton variant="success" label="Guardar" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
    </div>
  );
}



export default App;
