import React from 'react';
import Dropdown from './DropDown';

export default {
    title: 'InputForm/Dropdown',
    component: Dropdown,
}

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
        title:'Frutas',
        size: 'all',
        options: [
          {
            id:1, 
            name: 'MANGO',
          },
          {
            id:2, 
            name: 'FRESA',
          },
          {
            id:3, 
            name: 'MANZANA',
          }
       ]
    };

export const Large = Template.bind({});
    Large.args = {
      size: 'large',
      title: 'Large'
    };
    
export const Medium = Template.bind({});
    Medium.args = {
      size: 'medium',
      title: 'Medium'
    };
    
export const Small = Template.bind({});
    Small.args = {
      size: 'small',
      title: 'Small'
    };

export const BorderRadius = Template.bind({});
    BorderRadius.args = {
      size: 'large',
      title: 'with border radius',
      border: true,
    }