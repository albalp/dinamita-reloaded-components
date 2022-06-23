import { useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md'
import Calendar from './Calendar/Calendar';
import Input from './Form/Input/Input';
import TextArea from './textArea/textArea';
import Modal from './modal/modal';
import Button from './saveButton';
import Dropdown from './dropdown/DropDown';
import data from '../api/mocks.json';
import { useModal } from './modal/useModal';
import {Observable} from 'windowed-observable'


const Integration = ({options, id, name}) => {
    const initialValues = {
        ticket: {value: '', valid: null},
        comments: {value: '', valid: null},
        hours: {value: 1, valid: null},
        date: {value: '', valid: null}
      }

    const [initialForm, setInitialForm] = useState(initialValues);

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

      const {isOpen, closeModal, openModal} = useModal();
      
      const handleDate = (date) => {
        setInitialForm({
          ...initialForm,
          date: {value: date, valid: null}
        });
      }
      const observableTitle = new Observable('modal-title');
      const [title, setTitle] = useState('')
      useEffect(() => {
        observableTitle.subscribe((message) => {
          setTitle(message)
       
        });
      });

  return (
    <div className="container-modal">
        <Modal title={title} isOpen={isOpen} closeModal={closeModal} size='large'>
            <Calendar size="small" shadow={false} setValue={handleDate} />
            <form className="form-integration">
                <Dropdown borderRadius title="Project" icon={<MdArrowDropDown />} options={[data.project]} id={"ProjectId"} name={"ProjectName"}/>
                <Dropdown borderRadius title="Categories" icon={<MdArrowDropDown />} options={data.project.ProjectCategories} id={"CategoryID"} name={"CategoryName"}/>
                <Input onChange={inputsValidations} name="hours"  type="number" label="Hours" legend="Invalid hours" value={initialForm.hours.value}  valid={initialForm.hours.valid}/>
                <Input onChange={inputsValidations} name="ticket" type="text" label="Ticket" legend="Invalid ticket" value={initialForm.ticket.value}  valid={initialForm.ticket.valid}/>
                <TextArea name="comments" onChange={inputsValidations} important label="Comments" value={initialForm.comments.value}/>
                <div className="form-footer">
                  <Button type='button' label="Cancel" />
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

export default Integration;