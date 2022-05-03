import {useState} from 'react';
import { BiUser } from "react-icons/bi";
import Form from './components/Form/Form/Form';
import Input from './components/Form/Input/Input';
import Checkbox from './components/Form/Checkbox/Checkbox';

function App() {

  const initialValues = {
    name: {value: '', valid: null},
    lastname: {value: '', valid: null},
    email: {value: '', valid: null},
    password: {value: '', valid: null},
  }

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [initialForm, setInitialForm] = useState(initialValues);

  const inputsValidations = (e) => {
    if(expressions[e.target.name].test(e.target.value)) {
      setInitialForm({
        ...initialForm,
        [e.target.name]: {value: e.target.value, valid: true} 
      });
    }else {
      setInitialForm({
        ...initialForm,
        [e.target.name]: {value: e.target.value, valid: false} 
      });
    }
  }

  return (

    <Form  variant="flex" alert="Ops, ocurred it an error" valid={true}>
      <Input name="name" onChange={inputsValidations} placeholder="Name" legend="Invalid name" value={initialForm.name.value} valid={initialForm.name.valid}/>
      <Input name="lastname" onChange={inputsValidations} placeholder="Lastname" legend="Invalid lastname" icon={<BiUser/>} value={initialForm.lastname.value} valid={initialForm.lastname.valid}/>
      <Input name="email" onChange={inputsValidations} type="email" label="Email address" legend="Invalid email" value={initialForm.email.value} valid={initialForm.email.valid}/>
      <Input name="password" onChange={inputsValidations} type="password" legend="Invalid password" secondary secondaryPlaceholder="Password" value={initialForm.password.value} valid={initialForm.password.valid}/>
      <Checkbox label="Male" value="male" secondary />
      <Checkbox label="Female" value="female" />
      <Checkbox label="Unknown" value="unknown"  tertiary/>
      <Checkbox label="Other" value="other" rounded/>
    </Form>
  );
}

export default App;