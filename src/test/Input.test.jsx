import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Input from '../components/Form/Input/Input';
import Form from '../components/Form/Form/Form';

beforeEach(() => {
    render(
        <Form>
            <Input name="name" placeholder="Name"/>
            <Input name="email" secondaryPlaceholder="Email address" secondary/>
            <Input name="password" label="Password"/>
        </Form>
    );
});

describe('<Input> - Testing input component', () => {    

    test('Should to show the input component default', () => {
        
        const input = screen.getByPlaceholderText(/Name/i);
        expect(input).toBeInTheDocument();

    });

    test('Should to change the value of the input component', () => {

        const input = screen.getByPlaceholderText(/Name/i);
        fireEvent.change(input, {target: {value: 'Irving'}});

        expect(input).toHaveValue('Irving');
        
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

        const input = screen.getByText(/Email address/i).previousSibling;

        expect(input).toBeInTheDocument();

    });


    test('Should to change the value of the input component variant secondary', () => {

        const input = screen.getByText(/Email address/i).previousSibling;

        fireEvent.change(input, {target: {value: 'irving@gmail.com'}});

        expect(input).toHaveValue('irving@gmail.com');

    });

    test('Should to do the placeholder animation when the input have a value', () => {

        const input = screen.getByText(/Email address/i).previousSibling;

        fireEvent.change(input, {target: {value: 'irving@gmail.com'}});

        expect(input).toHaveClass('activated');
    });

});

describe('<Input> - Testing input component label variant', () => {

    test('Should to be in the document the input component label variant', () => {

        const input = screen.getByLabelText(/Password/i);

        expect(input).toBeInTheDocument();

    });

    test('Should to change the value of the input component variant label', () => {

        const input = screen.getByLabelText(/Password/i);

        fireEvent.change(input, {target: {value: 'irving123'}});

        expect(input).toHaveValue('irving123');

    });

});