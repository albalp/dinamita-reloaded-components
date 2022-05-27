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
  const {isOpen, openModal, closeModal} = useModal(false);
  return (
    <div>
      <SaveButton label="Click" onClick={openModal} />
      <Modal {...args}  isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: "Create Activity"
};

export const LightOrDark = Template.bind({});
LightOrDark.args = {
  modeDark: true
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