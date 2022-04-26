import SaveButton from './components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Header from './components/header/header';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>
      <Header variant="primary" />
      <SaveButton variant="danger" label="Cancel" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
    </div>
  );
}



export default App;
