import Header from '../../header/header'
import React from 'react';

export default {
    title: 'Modal/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const BorderAll = Template.bind({})
export const Primary = Template.bind({})
Primary.args = {
  label : 'Classic header',
  variant : 'primary',
}

BorderAll.args = {
  label : 'Border header',
  variant : 'sb-border'
}




