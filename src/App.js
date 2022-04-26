import SaveButton from './components/saveButton';
import DropDown from './components/dropdown/DropDown';
import DropdownReact from './components/dropdown/DropdownReact';

//import AddTaskIcon from '@mui/icons-material/AddTask';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  return (
    <div>
      <SaveButton variant="default" onClick={Clicked} />
      <DropDown />
      <DropdownReact />
    </div>
    
  );
}



export default App;
