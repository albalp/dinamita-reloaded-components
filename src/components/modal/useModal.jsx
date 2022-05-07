//hook
import {useState} from 'react';

export const useModal = (initialValue=false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = (e) => setIsOpen(true);
  const closeModal = (e) => setIsOpen(false);

  //variable de estado, método que abre, método que cierra
  return [isOpen, openModal, closeModal];
};