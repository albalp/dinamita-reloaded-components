import React from 'react';
import Dropdown from './DropDown';
import { BiCaretDown, BiArchiveIn } from "react-icons/bi";

export default {
    title: 'InputForm/Dropdown',
    component: Dropdown,
}

const Template = (args) => <Dropdown {...args} />;

export const DropdownIcon = Template.bind({});
DropdownIcon.args = {
  icon: <BiCaretDown/>,
  options: [
    {
      id:'', 
      name: '',
    },
  ]
}

export const Primary = Template.bind({});
    Primary.args = {
        title:'Frutas',
        size: 'medium',
        icon: <BiArchiveIn/>,
        borderRadius: true,
        backgroundColor: '',
        options: [
          {
            id:1, 
            name: 'Mango',
          },
          {
            id:2, 
            name: 'Fresa',
          },
          {
            id:3, 
            name: 'Manzana',
          }
       ]
    };

export const Large = Template.bind({});
    Large.args = {
      size: 'large',
      options: [
        {
          id:'', 
          name: '',
        }
      ]
    };
    
export const Medium = Template.bind({});
    Medium.args = {
      size: 'medium',
      options: [
        {
          id:'', 
          name: '',
        },
      ]
    };
    
export const Small = Template.bind({});
    Small.args = {
      size: 'small',
      options: [
        {
          id:'', 
          name: '',
        },
      ]
    };

    
