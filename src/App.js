import SaveButton from './components/saveButton';
//import DropdownOpt from './components/dropdown/DropdownOpt';
import Dropdown from './components/dropdown/Dropdown';
import data from '../src/api/mocks.json';

import { MdArrowDropDown } from 'react-icons/md'
//import AddTaskIcon from '@mui/icons-material/AddTask';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }

  const projectData = [
     {
       id:data.project.ProjectId, 
       name:data.project.ProjectName,
     }
  ]
  const categories = []
  data.project.ProjectCategories.map(category => categories.push({id:category.CategoryID, name:category.CategoryName}))



  return (
    <div>
      <SaveButton variant="default" onClick={Clicked} />
      <Dropdown title="Project" icon={<MdArrowDropDown />} options={projectData}/>
      <Dropdown title="Categories" icon={<MdArrowDropDown />} options={categories}/>
    </div>
    
  );
}



export default App;
