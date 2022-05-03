import Input from './Input';
import { BiUser } from "react-icons/bi";

export default {
    title: 'form/input',
    component: Input
}

const Template = (args) => <Input {...args}/>

// Input default variant
export const InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: 'Input default'
}

// Input size small variant
export const InputSmall = Template.bind({});
InputSmall.args = {
    placeholder: 'Input small',
    size: 'small'
}

// Input size medium variant
export const InputMedium = Template.bind({});
InputMedium.args = {
    placeholder: 'Input medium',
    size: 'medium'
}

// Input size large variant
export const InputLarge = Template.bind({});
InputLarge.args = {
    placeholder: 'Input large',
    size: 'large'
}

// Input width small variant
export const InputWidthSmall = Template.bind({});
InputWidthSmall.args = {
    placeholder: 'Input width small',
    width: 'small'
}

// Input width medium variant
export const InputWidthMedium = Template.bind({});
InputWidthMedium.args = {
    placeholder: 'Input width medium',
    width: 'medium'
}

// Input width large variant
export const InputWidthLarge = Template.bind({});
InputWidthLarge.args = {
    placeholder: 'Input width large',
    width: 'large'
}

// Input width all variant
export const InputWidthAll = Template.bind({});
InputWidthAll.args = {
    placeholder: 'Input width all',
    width: 'all'
}

// Input icon variant
export const InputIcon = Template.bind({});
InputIcon.args = {
    placeholder: 'Input with icon',
    icon: <BiUser/>
}

// Input rounded variant
export const InputRounded = Template.bind({});
InputRounded.args = {
    placeholder: 'Input rounded',
    rounded: true
}

// Input dark variant
export const InputDark = Template.bind({});
InputDark.args = {
    placeholder: 'Input dark',
    dark: true
}

// Input light variant
export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'Input light',
    light: true
}

// Input secondary variant
export const InputSecondary = Template.bind({});
InputSecondary.args = {
    secondaryPlaceholder: 'Input secondary',
    secondary: true
}

// Input label variant
export const InputLabel = Template.bind({});
InputLabel.args = {
    label: 'Email address'
}