import React from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'InputForm/Dropdown',
    component: Dropdown,
}

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
        title:'Frutas',
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
    };
    
export const Medium = Template.bind({});
    Medium.args = {
      size: 'medium',
     
    };
    
export const Small = Template.bind({});
    Small.args = {
      size: 'small',
      
    };
