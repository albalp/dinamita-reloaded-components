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
export const FormDefault = (args) => {
    return(
        <Form {...args} size="small" title="Default">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
        </Form>
    );
}

// Form variant grid
export const FormGrid = (args) => {
    return(
        <Form {...args} size="small" title="Grid" variant="grid">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant flex
export const FormFlex = (args) => {
    return(
        <Form {...args} size="small" title="Flex" variant="flex">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant size small
export const FormSmall = (args) => {
    return(
        <Form {...args} size="small" title="Small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant size medium
export const FormMedium = (args) => {
    return(
        <Form {...args} size="medium" title="Medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant size large
export const FormLarge = (args) => {
    return(
        <Form {...args} size="large" title="Large">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant Dark
export const FormDark = (args) => {
    return(
        <Form {...args} size="small" title="Dark" dark>
            <Input type="text" name="name" placeholder="Name" dark/>
            <Input type="text" name="lastmame" placeholder="Lastname" dark/>
            <Input type="number" name="Phone" placeholder="Phone" dark/>
            <Input type="email" name="email" placeholder="Email address" dark/>
        </Form>
    );
}

// Form variant button size small
export const FormButtonSizeSmall = (args) => {
    return(
        <Form {...args} size="small" title="Button Small" buttonSize="small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button size medium
export const FormButtonSizeMedium = (args) => {
    return(
        <Form {...args} size="small" title="Button Medium" buttonSize="medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button size large
export const FormButtonSizeLarge = (args) => {
    return(
        <Form {...args} size="small" title="Button Large" buttonSize="large">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button width small
export const FormButtonWidthSmall = (args) => {
    return(
        <Form {...args} size="small" title="Button Small" buttonWidth="small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button width medium
export const FormButtonWidthMedium = (args) => {
    return(
        <Form {...args} size="small" title="Button Medium" buttonWidth="medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button width medium
export const FormButtonWidthLarge = (args) => {
    return(
        <Form {...args} size="small" title="Button Large" buttonWidth="large">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button position left
export const FormLeftButton = (args) => {
    return(
        <Form {...args} size="small" title="Button Left" buttonPosition="left">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button position center
export const FormCenterButton = (args) => {
    return(
        <Form {...args} size="small" title="Button Center" buttonPosition="center">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button position right
export const FormRightButton = (args) => {
    return(
        <Form {...args} size="small" title="Button Right" buttonPosition="right">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant button with label
export const FormLabelButton = (args) => {
    return(
        <Form {...args} size="small" title="Button Label" labelButton="Create">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant with text
export const FormText = (args) => {
    return(
        <Form {...args} size="small" title="Button Text" text="You can add a text in this part">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant with component button
export const FormButtonComponent = (args) => {
    return(
        <Form {...args} size="small" title="Button component" buttonComponent={<Button label="Hello"/>}>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant invalid input
export const FormInvalidInput = (args) => {
    return(
        <Form {...args} size="small" title="Button component" buttonComponent={<Button label="Hello"/>}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false}/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant invalid
export const FormInvalid = (args) => {
    return(
        <Form {...args} size="small" title="Button component" alert="Oops, an error occurred" buttonComponent={<Button label="Hello"/>} valid={false}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

// Form variant invalid input dark
export const FormDarkInvalidInput = (args) => {
    return(
        <Form {...args} size="small" title="Button component" buttonComponent={<Button label="Hello" shadow={false}/>} dark>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false} dark/>
            <Input type="number" name="Phone" placeholder="Phone" dark/>
            <Input type="email" name="email" placeholder="Email address" dark/>
        </Form>
    );
}

// Form variant search
export const FormSearch = (args) => {
    return(
        <Form {...args} size="small" search variant="flex" buttonWidth="small">
            <Input type="text" name="search" placeholder="Search" icon={<BiSearch/>}/>
        </Form>
    );
}
