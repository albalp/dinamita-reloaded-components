import SaveButton from './components/saveButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Header from './components/header/header';
import TextArea from './components/textArea/textArea';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>
      <Header variant="primary" />
      <TextArea />
      <SaveButton variant="danger" label="Cancel" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
    </div>
  );
}



export default App;
