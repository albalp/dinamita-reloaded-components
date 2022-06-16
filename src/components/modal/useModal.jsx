//hook
import {useState} from 'react';
import { Observable } from 'windowed-observable';

export const useModal = (initialValue) => {
  const observable = new Observable('modal-state');
  const observableTitle = new Observable('modal-title');

  
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = (e) => setIsOpen(true);
  const closeModal = (e) => setIsOpen(false);
  observable.subscribe(openModal)
  observableTitle.subscribe(openModal)

  //variable de estado, método que abre, método que cierra
  return {isOpen, openModal, closeModal}; 

};