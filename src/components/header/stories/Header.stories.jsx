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
  borderRadius: true,
}




