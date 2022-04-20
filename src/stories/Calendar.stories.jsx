import Calendar from '../components/Calendar';

export default {
    title: 'Calendar',
    component: Calendar,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}

const Template = args => <Calendar {...args}/>;

export const CalendarDefault = Template.bind({});

export const CalendarDark = Template.bind({});
CalendarDark.args = {
    dark: true
}

export const CalendarSmall = Template.bind({});
CalendarSmall.args = {
    size: 'small'
}

export const CalendarMedium = Template.bind({});
CalendarMedium.args = {
    size: 'medium'
}

export const CalendarLarge = Template.bind({});
CalendarLarge.args = {
    size: 'large'
}

export const CalendarCircle = Template.bind({});
CalendarCircle.args = {
    size: 'medium',
    variant: 'circle'
}

export const CalendarSquare = Template.bind({});
CalendarSquare.args = {
    size: 'medium',
    variant: 'square'
}

export const CalendarOtherBackgroundColor = Template.bind({});
CalendarOtherBackgroundColor.args = {
    size: 'medium',
    backgroundColor: 'whitesmoke'
}