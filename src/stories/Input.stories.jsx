import Input from '../components/Form/Input';
import { BiUser } from "react-icons/bi";

export default {
    title: 'form/input',
    component: Input
}

const Template = (args) => <Input {...args}/>

export const InputDefault = Template.bind({});
InputDefault.args = {
    placeholder: 'Input default'
}

export const InputSmall = Template.bind({});
InputSmall.args = {
    placeholder: 'Input small',
    size: 'small'
}

export const InputMedium = Template.bind({});
InputMedium.args = {
    placeholder: 'Input medium',
    size: 'medium'
}

export const InputLarge = Template.bind({});
InputLarge.args = {
    placeholder: 'Input large',
    size: 'large'
}

export const InputWidthSmall = Template.bind({});
InputWidthSmall.args = {
    placeholder: 'Input width small',
    width: 'small'
}

export const InputWidthMedium = Template.bind({});
InputWidthMedium.args = {
    placeholder: 'Input width medium',
    width: 'medium'
}

export const InputWidthLarge = Template.bind({});
InputWidthLarge.args = {
    placeholder: 'Input width large',
    width: 'large'
}

export const InputWidthAll = Template.bind({});
InputWidthAll.args = {
    placeholder: 'Input width all',
    width: 'all'
}

export const InputIcon = Template.bind({});
InputIcon.args = {
    placeholder: 'Input with icon',
    icon: <BiUser/>
}

export const InputRounded = Template.bind({});
InputRounded.args = {
    placeholder: 'Input rounded',
    rounded: true
}

export const InputDark = Template.bind({});
InputDark.args = {
    placeholder: 'Input dark',
    dark: true
}

export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'Input light',
    light: true
}

export const InputSecondary = Template.bind({});
InputSecondary.args = {
    secondaryPlaceholder: 'Input secondary',
    secondary: true
}

export const InputLabel = Template.bind({});
InputLabel.args = {
    label: 'Email address'
}