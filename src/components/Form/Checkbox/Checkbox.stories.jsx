import Checkbox from './Checkbox';

export default {
    title: 'form/checkbox',
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

// Checkbox default variant
export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
    label: 'Default'
}

// Checkbox rounded variant
export const CheckboxRounded = Template.bind({});
CheckboxRounded.args = {
    label: 'Rounded',
    rounded: true
}

// Checkbox secondary variant
export const CheckboxSecondary = Template.bind({});
CheckboxSecondary.args = {
    label: 'Secondary',
    secondary: true
}

// Checkbox tertiary variant
export const CheckboxTertiary = Template.bind({});
CheckboxTertiary.args = {
    label: 'Tertiary',
    tertiary: true
}