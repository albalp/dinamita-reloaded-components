import Form from './Form';
import Input from '../Input/Input';
import Button from '../../SaveButton';
import { BiSearch } from "react-icons/bi";

// Default export to create our storybook section
export default {
    title: 'form/form',
    component: Form,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}

// Form default variant
const Template = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
        </Form>
    );
}
export const FormDefault = Template.bind({});
FormDefault.args = {
    title: 'default'
}

// Form variant grid
export const FormGrid = Template.bind({});
FormGrid.args = {
    title: 'Grid',
    size: 'small',
    variant: 'grid'
}

// Form variant flex
export const FormFlex = Template.bind({});
FormFlex.args = {
    title: 'Flex',
    size: 'small',
    variant: 'flex'
}

// Form variant size small
export const FormSmall = Template.bind({});
FormSmall.args = {
    title: 'Small',
    size: 'small'
}

// Form variant size medium
export const FormMedium = Template.bind({});
FormMedium.args = {
    title: 'Medium',
    size: 'medium'
}


// Form variant size large
export const FormLarge = Template.bind({});
FormLarge.args = {
    title: 'Large',
    size: 'large'
}

// Form variant Dark
export const FormDark = Template.bind({});
FormDark.args = {
    title: 'Dark',
    size: 'small',
    dark: true
}


// Form variant button size small
export const FormButtonSizeSmall = Template.bind({});
FormButtonSizeSmall.args = {
    title: 'Button Small',
    size: 'small',
    buttonSize: 'small',
}

// Form variant button size medium
export const FormButtonSizeMedium = Template.bind({});
FormButtonSizeMedium.args = {
    title: 'Button Medium',
    size: 'small',
    buttonSize: 'medium',
}

// Form variant button size large
export const FormButtonSizeLarge = Template.bind({});
FormButtonSizeLarge.args = {
    title: 'Button Large',
    size: 'small',
    buttonSize: 'large',
}

// Form variant button width small
export const FormButtonWidthSmall = Template.bind({});
FormButtonWidthSmall.args = {
    title: 'Button Width Small',
    size: 'small',
    buttonWidth: 'small',
}


// Form variant button width medium
export const FormButtonWidthMedium = Template.bind({});
FormButtonWidthMedium.args = {
    title: 'Button Width Medium',
    size: 'small',
    buttonWidth: 'medium',
}

// Form variant button width medium
export const FormButtonWidthLarge = Template.bind({});
FormButtonWidthLarge.args = {
    title: 'Button Width Large',
    size: 'small',
    buttonWidth: 'large',
}

// Form variant button position left
export const FormLeftButton = Template.bind({});
FormLeftButton.args = {
    title: 'Button Left',
    buttonPosition: 'left',
    size: 'small'
}

// Form variant button position center
export const FormCenterButton = Template.bind({});
FormCenterButton.args = {
    title: 'Button Center',
    buttonPosition: 'center',
    size: 'small'
}

// Form variant button position right
export const FormRightButton = Template.bind({});
FormRightButton.args = {
    title: 'Button Right',
    buttonPosition: 'right',
    size: 'small'
}

// Form variant button with label
export const FormLabelButton = Template.bind({});
FormLabelButton.args = {
    title: 'Button Label',
    labelButton: 'Click me',
    size: 'small'
}

// Form variant with text
export const FormText = Template.bind({});
FormText.args = {
    title: 'Button Text',
    text: 'You can add a text here.',
    size: 'small'
}

// Form variant with component button
export const FormButtonComponent = Template.bind({});
FormText.args = {
    title: 'Button Button Component',
    buttonComponent: <Button label="Hello"/>,
    size: 'small'
}

// Form variant invalid input
export const FormInvalidInput = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false}/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

FormInvalidInput.args = {
    title: 'Form Invalid Input',
    size: 'small',
}

// Form variant invalid
export const FormInvalid = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

FormInvalid.args = {
    title: 'Form Invalid',
    size: 'small',
    alert: 'Oops, an error occurred',
    valid: false
}

// Form variant invalid input dark
export const FormDarkInvalidInput = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false} dark/>
            <Input type="number" name="Phone" placeholder="Phone" dark/>
            <Input type="email" name="email" placeholder="Email address" dark/>
        </Form>
    );
}

FormDarkInvalidInput.args = {
    title: 'Form Darl Invalid Input',
    size: 'small',
    dark: true
}

// Form variant search
export const FormSearch = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="search" placeholder="Search" icon={<BiSearch/>}/>
        </Form>
    );
}

FormSearch.args = {
    size: 'small',
    variante: 'flex',
    buttonWidth: 'small'
}

// Form variant search
export const FormSearchInvalid = (args) => {
    return(
        <Form {...args}>
            <Input type="text" name="search" placeholder="Search" icon={<BiSearch/>}/>
        </Form>
    );
}

FormSearchInvalid.args = {
    size: 'small',
    variante: 'flex',
    buttonWidth: 'small',
    legend: 'No results',
    valid: false
}