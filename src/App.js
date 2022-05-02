import SaveButton from './components/saveButton';
//import DropdownOpt from './components/dropdown/DropdownOpt';
import data from '../src/api/mocks.json';
import Dropdown from './components/dropdown/Dropdown';

import { MdArrowDropDown } from 'react-icons/md'
//import AddTaskIcon from '@mui/icons-material/AddTask';

function App() {
  function Clicked(){
    console.log("Clicked!");
  }
  const options = [
  ]

  const categoriesOptions = options.map(option => {
    const categories = option.categories.map(category => {
      return {id:category.CategoryID, name:category.CategoryName}
    })

    return categories
    
  })
  
  console.log(categoriesOptions)

  return (
    <div>
      <SaveButton variant="default" onClick={Clicked} />
      <Dropdown title="Project" icon={<MdArrowDropDown />} options={options}/>
      <Dropdown title="Categories" icon={<MdArrowDropDown />} options={categoriesOptions}/>
    </div>
    
  );
}



export default App;
