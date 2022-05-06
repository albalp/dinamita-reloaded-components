import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import { BiUser } from "react-icons/bi";
import {prettyDOM} from '@testing-library/dom';
import Input from '../components/Form/Input/Input';
import Form from '../components/Form/Form/Form';


describe('<Input> - Testing input component', () => {    

    test('Should to show the input component', () => {

        render(<Input name="name" placeholder="Name"/>);
        
        const input = screen.getByPlaceholderText(/Name/i);
        expect(input).toBeInTheDocument();

    });

    test('Should to change the value of the input component', () => {

        render(<Input name="name" placeholder="Name"/>);

        const input = screen.getByPlaceholderText(/Name/i);
        fireEvent.change(input, {target: {value: 'Irving'}});

        expect(input).toHaveValue('Irving');
        
    });

    test('Should to execute the function onChange receive like property', () => {

        const handleMock = jest.fn();

        render(<Input name="name" placeholder="Name" onChange={handleMock} />);

        const input = screen.getByPlaceholderText(/Name/i);

        fireEvent.change(input, {target: {value: 'Hi!'}});

        expect(handleMock).toBeCalledTimes(1);
    
    });
    
});

describe('<Input> - Testing when the input is invalid', () => {
    
    test('Should to show th error legend when the input is not valid', () => {
        
        render(<Input name="lastname" placeholder="Lastname" legend="Invalid lastname" valid={false}/>);

        const legend = screen.getByText(/Invalid lastname/i);

        expect(legend).toHaveClass('activated');

    });
});

describe('<Input> - Testing input component secondary variant', () => {

    test('Should to be in the document the input component secondary variant', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary/>);

        const input = screen.getByText(/Email address/i).previousSibling;

        expect(input).toBeInTheDocument();

    });
 
    test('Should to change the value of the input component variant secondary', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary/>);

        const input = screen.getByText(/Email address/i).previousSibling;

        fireEvent.change(input, {target: {value: 'irving@gmail.com'}});

        expect(input).toHaveValue('irving@gmail.com');

    });

    test('Should to do the placeholder animation when the input have a value', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary/>);

        const input = screen.getByText(/Email address/i).previousSibling;

        fireEvent.change(input, {target: {value: 'irving@gmail.com'}});

        expect(input).toHaveClass('activated');
    });

    test('Should to have the activated class when the input have a value', () => {


        render(<Input name="name" placeholder="Name" />);

        const input = screen.getByPlaceholderText(/Name/i);

        fireEvent.change(input, {target: {value: 'Hi!'}});

        expect(input).toHaveClass('activated');
    
    });

    test('Should to remove  the activated class when the input have not a value', () => {


        render(<Input name="name" placeholder="Name" />);

        const input = screen.getByPlaceholderText(/Name/i);

        fireEvent.change(input, {target: {value: 'Hi!'}});
        fireEvent.change(input, {target: {value: ''}});

        expect(input).not.toHaveClass('activated');
    
    });

});

describe('<Input> - Testing input component label variant', () => {

    test('Should to be in the document the input component label variant', () => {

        render(<Input name="password" label="Password"/>);

        const input = screen.getByLabelText(/Password/i);

        expect(input).toBeInTheDocument();

    });

    test('Should to change the value of the input component variant label', () => {

        render(<Input name="password" label="Password"/>);

        const input = screen.getByLabelText(/Password/i);

        fireEvent.change(input, {target: {value: 'irving123'}});

        expect(input).toHaveValue('irving123');

    });

});

describe('<Input> - Testing of properties in the input default variant ', () => {

    test('Should to have the dark class when receive the dark property', () => {

        render(<Input name="name" placeholder="Name" dark/>);
        
        const input = screen.getByPlaceholderText(/Name/i).parentNode.parentNode;
        
        expect(input).toHaveClass('dark');

    });

    test('Should to have the light class when receive the light property', () => {

        render(<Input name="name" placeholder="Name" light/>);
        
        const input = screen.getByPlaceholderText(/Name/i).parentNode.parentNode;
        
        expect(input).toHaveClass('light');

    });

    test('Should to have the icon class when receive the icon property', () => {

        render(<Input name="name" placeholder="Name" icon={<BiUser/>}/>);
        
        const input = screen.getByPlaceholderText(/Name/i);
        
        expect(input).toHaveClass('input-control--icon');

    });

    test('Should to have the rounded class when receive the rounded property', () => {

        render(<Input name="name" placeholder="Name" rounded/>);
        
        const input = screen.getByPlaceholderText(/Name/i);
        
        expect(input).toHaveClass('rounded');

    });

    test('Should to have the className received like property', () => {

        render(<Input name="name" placeholder="Name" className="input-control-new"/>);
        
        const input = screen.getByPlaceholderText(/Name/i);
        
        expect(input).toHaveClass('input-control-new');

    });

    test('Should to show the error legend when receive the legend property and the input is invalid', () => {

        render(<Input name="name" placeholder="Name" legend="Invalid name" rounded valid={false}/>);
        
        const input = screen.getByPlaceholderText(/Name/i);
        const legend = screen.getByText(/Invalid name/i);
        
        expect(legend).toHaveClass('rounded');

    });

});

describe('<Input> - Testing of properties in the input secondary variant', () => {

    test('Should to have the dark class when receive the dark property', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary dark/>);

        const inputContainer = screen.getByText(/Email address/i).parentNode.parentNode;

        expect(inputContainer).toHaveClass('dark');

    });

    test('Should to have the light class when receive the light property', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary light/>);

        const inputContainer = screen.getByText(/Email address/i).parentNode.parentNode;

        expect(inputContainer).toHaveClass('light');

    });

    test('Should to have the rounded class when receive the rounded property', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary rounded/>);

        const input = screen.getByText(/Email address/i).previousSibling;

        expect(input).toHaveClass('rounded');

    });

    test('Should to show the error legen when receive the legen property and the input is invalid', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary legend="Invalid email address" valid={false}/>);

        const legend = screen.getByText(/Invalid email address/i);

        expect(legend).toBeInTheDocument();

    });

    test('Should to show the error legen when receive the legen property and the input is invalid', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary legend="Invalid email address" valid={false}/>);

        const legend = screen.getByText(/Invalid email address/i);

        expect(legend).toBeInTheDocument();

    });

    test('Should to show the error legen rounded when receive the rounded property', () => {

        render(<Input name="email" secondaryPlaceholder="Email address" secondary legend="Invalid email address" valid={false} rounded/>);

        const legend = screen.getByText(/Invalid email address/i);

        expect(legend).toBeInTheDocument();
        expect(legend).toHaveClass('rounded');

    });

});

describe('<Input> - Testing of properties in the input label variant', () => {

    test('Should to have the dark class when receive the dark property', () => {

        render(<Input name="password" label="Password" dark />);

        const inputContainer = screen.getByLabelText(/Password/i).parentNode.parentNode;

        expect(inputContainer).toHaveClass('dark');

    });

    test('Should to have the light class when receive the light property', () => {

        render(<Input name="password" label="Password" light />);

        const inputContainer = screen.getByLabelText(/Password/i).parentNode.parentNode;

        expect(inputContainer).toHaveClass('light');

    });

    test('Should to have the rounded class when receive the rounded property', () => {

        render(<Input name="password" label="Password" rounded />);

        const input = screen.getByLabelText(/Password/i);

        expect(input).toHaveClass('rounded');

    });

    test('Should to have the className received like property', () => {

        render(<Input name="password" label="Password" className="input-new" />);

        const input = screen.getByLabelText(/Password/i);

        expect(input).toHaveClass('input-new');

    });

    test('Should to show the error legend when receive the legend property and the input is invalid', () => {

        render(<Input name="password" label="Password" legend="Invalid password" valid={false} />);

        const legend = screen.getByText(/Invalid password/i);

        expect(legend).toBeInTheDocument();
        expect(legend).toHaveClass('activated');

    });

    test('Should show the error legend rounded when receive the rounded property', () => {

        render(<Input name="password" label="Password" legend="Invalid password" rounded />);

        const legend = screen.getByText(/Invalid password/i);

        expect(legend).toBeInTheDocument();
        expect(legend).toHaveClass('rounded');

    });

});