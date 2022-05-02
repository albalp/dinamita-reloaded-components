import TextArea from '../../textArea/textArea'
import React from 'react';

export default {
    title: 'Modal/TextArea',
    component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const BorderAndPlaceholder = Template.bind({})


BorderAndPlaceholder.args = {
  label : 'Con placeholder y borde',
  variant : 'sb-border',
  backgroundColor : 'sb-background-black',
  borderRadius : true,
  border : 'green',
  placeholder : '',
}




