//hook
import {useState} from 'react';

export const useModal = (initialValue=false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //variable de estado, método que abre, método que cierra
  return [isOpen, openModal, closeModal];
};