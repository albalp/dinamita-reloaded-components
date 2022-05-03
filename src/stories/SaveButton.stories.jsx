import React from 'react';
import { action } from '@storybook/addon-actions';
import SaveButton from '../components/SaveButton';
import { BiCheck, BiMoon } from "react-icons/bi";

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

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Save',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'save',
};

export const ButtonWithALargeLabel = Template.bind({});
ButtonWithALargeLabel.args = {
  label: 'Button with a large label'
}

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Primary',
  variant: 'primary'
}

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  label: 'Success',
  variant: 'success',
  onClick: action('Click handle')
}

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  label: 'Danger',
  variant: 'danger'
}

export const ButtonLabelAndIcon = Template.bind({});
ButtonLabelAndIcon.args = {
  label: 'Save',
  icon: <BiCheck/>
}

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  icon: <BiMoon/>
}

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  label: 'Disabled',
  disabled: true
}