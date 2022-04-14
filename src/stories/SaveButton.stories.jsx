import React from 'react';
import SaveButton from '../components/saveButton';

export default {
  title: 'Save/Button',
  component: SaveButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SaveButton {...args} />;

export const beforeSave = Template.bind({});
beforeSave.args = {
  beforeSave: true,
  label: 'save',
};

export const afterSave = Template.bind({});
afterSave.args = {
  label: 'save',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'save',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'save',
};
