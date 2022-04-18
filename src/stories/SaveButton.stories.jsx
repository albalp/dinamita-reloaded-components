import React from 'react';
import SaveButton from '../components/saveButton';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { action } from '@storybook/addon-actions';

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
  label: 'Save',
};

export const afterSave = Template.bind({});
afterSave.args = {
  label: 'Save',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Save',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Save',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Save',
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
  icon: <CheckOutlinedIcon/>
}

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  icon: <DarkModeOutlinedIcon/>
}

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  label: 'Disabled',
  disabled: true
}