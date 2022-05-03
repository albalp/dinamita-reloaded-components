import React from 'react';
import Modal from '../modal';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Modal {...args} />;

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