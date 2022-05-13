import {useState} from 'react';
import { MdArrowDropDown } from 'react-icons/md'
import Calendar from './Calendar/Calendar';
import Input from './Form/Input/Input';
import TextArea from './textArea/textArea';
import Modal from './modal/modal';
import Button from './SaveButton';
import Dropdown from './dropdown/DropDown';
import data from '../api/mocks.json';
import { useModal } from './modal/useModal';

const Integration = () => {

    const initialValues = {
        ticket: {value: '', valid: null},
        comments: {value: '', valid: null},
        hours: {value: 1, valid: null},
      }

    const [initialForm, setInitialForm] = useState(initialValues);

    const categories = [];
    data.project.ProjectCategories.map(category => categories.push({id:category.CategoryID, name:category.CategoryName}));

    const projectData = [
        {
          id:data.project.ProjectId, 
          name:data.project.ProjectName,
        }
     ];
    
      const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        comments: /^[a-zA-ZÀ-ÿ\s]{1,255}$/,
        ticket: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        hours: /^[1-8]$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      }

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

      const {isOpen, openModal, closeModal} = useModal();
     
  return (
    <div className="container">
        <Modal title="Create Activity" isOpen={isOpen} closeModal={closeModal}>
            <Calendar size="small" shadow={false} />
            <form className="form-integration">
                <Dropdown borderRadius title="Project" icon={<MdArrowDropDown />} options={projectData}/>
                <Dropdown borderRadius title="Categories" icon={<MdArrowDropDown />} options={categories}/>
                <Input onChange={inputsValidations} name="hours"  type="number" label="Hours" legend="Invalid hours"  valid={initialForm.hours.valid}/>
                <Input onChange={inputsValidations} name="ticket" type="text" label="Ticket" legend="Invalid ticket"  valid={initialForm.ticket.valid}/>
                <TextArea name="comments" onChange={inputsValidations} important label="Comments" value={initialForm.comments.value}/>
                <div className="form-footer">
                  <Button label="Cancel" />
                  {initialForm.comments.value !== '' 

                    ? <Button label="Create" variant="primary" />
                    : <Button label="Create" variant="primary" disabled />
                  
                  }
                </div>
            </form>
        </Modal>
        <h2>Integration</h2>
        <Button label="Add activity" onClick={openModal} />
    </div>
  )
}

export default Integration
