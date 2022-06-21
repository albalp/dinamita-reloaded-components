//hook
import {useState} from 'react';
import { Observable } from 'windowed-observable';

export const useModal = () => {
  const observable = new Observable('modal-state');

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => setIsOpen(true);
  const closeModal = (e) => setIsOpen(false);
  observable.subscribe(openModal)
  observable.unsubscribe(closeModal);
  
  

  //variable de estado, método que abre, método que cierra
  return {isOpen, openModal, closeModal}; 

};