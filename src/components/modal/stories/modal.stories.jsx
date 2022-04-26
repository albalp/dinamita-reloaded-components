import React from 'react';
import Modals from '../modals';

export default {
  title: 'Modal',
  component: Modals,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Modals {...args} />;


export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const ModalLight = Template.bind({});
ModalLight.args = {
  variant: 'light'
}

export const ModalDark= Template.bind({});
ModalDark.args = {
  variant: 'dark'
}
