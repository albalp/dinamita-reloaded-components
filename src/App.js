<<<<<<< HEAD
import {useState} from 'react';
import { BiUser } from "react-icons/bi";
import Form from './components/Form/Form/Form';
import Input from './components/Form/Input/Input';
import Checkbox from './components/Form/Checkbox/Checkbox';
import AOS from "aos";
import SaveButton from './components/SaveButton';
//import DropdownOpt from './components/dropdown/DropdownOpt';
import Dropdown from './components/dropdown/DropDown';
import data from '../src/api/mocks.json';
import { MdArrowDropDown } from 'react-icons/md'
import AddTaskIcon from '@mui/icons-material/AddTask';
import Header from './components/header/header';
import TextArea from './components/textArea/textArea';
import Modals from './components/modal/modals';
=======
>>>>>>> 7ac77971189bd3a2d385489b293e302f52cba71c
import Integration from './components/Integration';

function App() {
  return (
<<<<<<< HEAD

    // <div>
    //   <Dropdown title="Project" icon={<MdArrowDropDown />} options={projectData}/>
    //   <Dropdown title="Categories" icon={<MdArrowDropDown />} options={categories}/>
    //   <Header variant="primary" />
    //   <TextArea />
    //   <SaveButton variant="success" label="Guardar" borderRadius icon={<AddTaskIcon/>} onClick={Clicked} />
    //   <Modals />
      
    //   <Form  variant="flex" alert="Ops, ocurred it an error" valid={true}>
    //     <Input name="name" onChange={inputsValidations} placeholder="Name" legend="Invalid name" value={initialForm.name.value} valid={initialForm.name.valid}/>
    //     <Input name="lastname" onChange={inputsValidations} placeholder="Lastname" legend="Invalid lastname" icon={<BiUser/>} value={initialForm.lastname.value} valid={initialForm.lastname.valid}/>
    //     <Input name="email" onChange={inputsValidations} type="email" label="Email address" legend="Invalid email" value={initialForm.email.value} valid={initialForm.email.valid}/>
    //     <Input name="password" onChange={inputsValidations} type="password" legend="Invalid password" secondary secondaryPlaceholder="Password" value={initialForm.password.value} valid={initialForm.password.valid}/>
    //     <Checkbox label="Male" value="male" secondary />
    //     <Checkbox label="Female" value="female" />
    //     <Checkbox label="Unknown" value="unknown"  tertiary/>
    //     <Checkbox label="Other" value="other" rounded/>
    //   </Form>
    // </div>
=======
>>>>>>> 7ac77971189bd3a2d385489b293e302f52cba71c
    <Integration/>
  );
}

export default App;