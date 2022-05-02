import Checkbox from '../components/Form/Checkbox';

export default {
    title: 'form/checkbox',
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
    label: 'Default'
}

export const CheckboxRounded = Template.bind({});
CheckboxRounded.args = {
    label: 'Rounded',
    rounded: true
}

export const CheckboxSecondary = Template.bind({});
CheckboxSecondary.args = {
    label: 'Secondary',
    secondary: true
}

export const CheckboxTertiary = Template.bind({});
CheckboxTertiary.args = {
    label: 'Tertiary',
    tertiary: true
}