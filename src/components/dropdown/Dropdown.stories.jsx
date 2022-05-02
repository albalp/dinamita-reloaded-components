import React from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'InputForm/Dropdown',
    component: Dropdown,
}

//export const Primary = () => <Dropdown />
const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
        title:'Project'
    };

export const Large = Template.bind({});
    Large.args = {
      size: 'large',
    };
    
export const Medium = Template.bind({});
    Medium.args = {
      size: 'medium',
     
    };
    
export const Small = Template.bind({});
    Small.args = {
      size: 'small',
      
    };
