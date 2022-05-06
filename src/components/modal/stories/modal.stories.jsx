import React from 'react';
import Modal from '../modal';
import SaveButton from '../../SaveButton';
import { action } from '@storybook/addon-actions';
import { useModal } from "../../modal/useModal";

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
      <SaveButton label="Click" onClick={openModal} />
      <Modal {...args}  isOpen={isOpenModal} closeModal={closeModal} />
    </div>
  );
}

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: "Create Activity"
};

export const LightOrDark = Template.bind({});
LightOrDark.args = {
  modeLoD: true
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};