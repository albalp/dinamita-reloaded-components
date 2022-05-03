import TextArea from '../../textArea/textArea'
import React from 'react';

export default {
    title: 'Modal/TextArea',
    component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const BorderAndPlaceholder = Template.bind({})

//The only changes to this sb is de border radius and placeholder
BorderAndPlaceholder.args = {
  label : 'Con placeholder y borde',
  borderRadius : true,
  placeholder : '',
}




