import Header from '../../header/header'
import React from 'react';

export default {
    title: 'Modal/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const BorderAll = Template.bind({})
BorderAll.args = {
  label : 'Border header',
  variant : 'sb-border'
}

export const Primary = Template.bind({})
Primary.args = {
  label : 'Classic header',
  variant : 'primary',
}



