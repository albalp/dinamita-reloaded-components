import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/SaveButton';

export default {
    title: 'form/form',
    component: Form
}

export const FormDefault = () => {
    return(
        <Form size="small" title="Default">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
        </Form>
    );
}

export const FormGrid = () => {
    return(
        <Form size="small" title="Grid" variant="grid">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormFlex = () => {
    return(
        <Form size="small" title="Flex" variant="flex">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormSmall = () => {
    return(
        <Form size="small" title="Small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormMedium = () => {
    return(
        <Form size="medium" title="Medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormLarge = () => {
    return(
        <Form size="large" title="Large">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormDark = () => {
    return(
        <Form size="small" title="Dark" dark>
            <Input type="text" name="name" placeholder="Name" dark/>
            <Input type="text" name="lastmame" placeholder="Lastname" dark/>
            <Input type="number" name="Phone" placeholder="Phone" dark/>
            <Input type="email" name="email" placeholder="Email address" dark/>
        </Form>
    );
}

export const FormButtonSizeSmall = () => {
    return(
        <Form size="small" title="Button Small" buttonSize="small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormButtonSizeMedium = () => {
    return(
        <Form size="small" title="Button Medium" buttonSize="medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormButtonSizeLarge = () => {
    return(
        <Form size="small" title="Button Large" buttonSize="large">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormButtonWidthSmall = () => {
    return(
        <Form size="small" title="Button Small" buttonWidth="small">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormButtonWidthMedium = () => {
    return(
        <Form size="small" title="Button Medium" buttonWidth="medium">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormLeftButton = () => {
    return(
        <Form size="small" title="Button Left" buttonPosition="left">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormCenterButton = () => {
    return(
        <Form size="small" title="Button Center" buttonPosition="center">
            <Input type="text" name="name" placeholder="Name"/>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormRightButton = () => {
    return(
        <Form size="small" title="Button Right" buttonPosition="right">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormLabelButton = () => {
    return(
        <Form size="small" title="Button Label" labelButton="Create">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormText = () => {
    return(
        <Form size="small" title="Button Text" text="You can add a text in this part">
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormButtonComponent = () => {
    return(
        <Form size="small" title="Button component" buttonComponent={<Button label="Hello"/>}>
            <Input type="text" name="lastmame" placeholder="Lastname"/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormInvalidInput = () => {
    return(
        <Form size="small" title="Button component" buttonComponent={<Button label="Hello"/>}>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false}/>
            <Input type="number" name="Phone" placeholder="Phone"/>
            <Input type="email" name="email" placeholder="Email address"/>
        </Form>
    );
}

export const FormDarkInvalidInput = () => {
    return(
        <Form size="small" title="Button component" buttonComponent={<Button label="Hello" dark  shadow={false}/>} dark>
            <Input type="text" name="lastmame" placeholder="Lastname" legend="Invalid lastname" valid={false} dark/>
            <Input type="number" name="Phone" placeholder="Phone" dark/>
            <Input type="email" name="email" placeholder="Email address" dark/>
        </Form>
    );
}