import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Form from '../components/Form/Form/Form';
import Button from '../components/SaveButton';
import {prettyDOM} from '@testing-library/dom';

describe('<Form> - Rendering form component in the application', () => {

    render( <Form title="Login"/> );

    test('Should be in the document when the application is loaded', () => {

        const form = screen.getByText(/Login/i);

        expect(form).toBeInTheDocument();
    });

});

describe('<Form> - Testing of the submit event', () => {
    
    test('Should to execute the onSubmit event', () => {

        const mockHandler = jest.fn();
        
        render( <Form title="Login" onSubmit={mockHandler}/> );
    
        const form = screen.getByText(/Login/i);

        fireEvent.submit(form);

        expect(mockHandler).toHaveBeenCalledTimes(1);

    });

});

describe('<Form> - Testing of properties', () => {

    
    test('Should to have the dark class if have the dark propery', () => {
        
        render( <Form title="Signup" dark/> );

        const form = screen.getByText(/Signup/i).parentNode;

        expect(form).toHaveClass('dark');

    });

    test('Should to have the className received like property', () => {
        
        render( <Form title="Signup" className="form-signup"/> );

        const form = screen.getByText(/Signup/i).parentNode;

        expect(form).toHaveClass('form-signup');

    });

    test('Should to have the background color received like property', () => {
        
        render( <Form title="Signup" backgroundColor="salmon"/> );

        const form = screen.getByText(/Signup/i).parentNode;

        expect(form).toHaveStyle('background-color: salmon');

    });

    test('Should to show the text received like property', () => {
        
        render( <Form title="Signup" text="You can add text here"/> );

        const form = screen.getByText(/Signup/i).parentNode;
        const text = screen.getByText(/You can add text here/i);

        expect(text).toBeInTheDocument();

    });
   

    test('Should to render the button component received like property', () => {
        
        render( <Form title="Signup" buttonComponent={<Button label="Ok" />}/> );

        const form = screen.getByText(/Signup/i).parentNode;
        const button = screen.getByRole('button', {name: /Ok/i});

        expect(button).toBeInTheDocument();

    });

    test('Should be rounded the button default of the component', () => {
        
        render( <Form title="Signup" labelButton="Hello" buttonRounded/> );

        const form = screen.getByText(/Signup/i).parentNode;
        const button = screen.getByRole('button', {name: /Hello/i});
    
        expect(button).toHaveClass('rounded');

    });

    test('Should to render the alert when receive the alert property and the form is invalid', () => {
        
        render( <Form title="Signup" alert="Oops, it occurred an error" valid={false}/> );

        const form = screen.getByText(/Signup/i).parentNode;
        const alert = screen.getByText(/Oops, it occurred an error/i);
    
        expect(alert).toHaveClass('activated');

    });

});

describe('<Form> - Testing the form with the search variant', () => {

    test('Should to render the form search variant when the form component receive the search property', () => {
        
        render( <Form search/> );

        const form = screen.getByRole('form');
        const button = screen.getByText(/Search/i);

        expect(form).toHaveClass('search');
        expect(button).toBeInTheDocument();

    });

    test('Should to have the dark class when receive the property dark', () => {
        
        render( <Form search dark/> );

        const form = screen.getByRole('form');

        expect(form).toHaveClass('search');
        expect(form).toHaveClass('dark');

    });

    
    test('Should to have the className received like property', () => {
        
        render( <Form search className="search-movies"/> );

        const form = screen.getByRole('form');

        expect(form).toHaveClass('search');
        expect(form).toHaveClass('search-movies');

    });

    test('Should to have the background color when receive the backgroundColor property', () => {
        
        render( <Form search backgroundColor="rgba(0,0,0,0.5)"/> );

        const form = screen.getByRole('form');

        expect(form).toHaveClass('search');
        expect(form).toHaveStyle('background-color: rgba(0,0,0,0.5)');

    });

    test('Should to render the button component received like property', () => {
        
        render( <Form search buttonComponent={<Button label="Search" />}/> );

        const form = screen.getByRole('form');
        const button = screen.getByRole('button', {name: /Search/i});

        expect(form).toHaveClass('search');
        expect(button).toBeInTheDocument();

    });

    test('Should to have the rounded class the default button when receive the buttonRounded property', () => {
        
        render( <Form search labelButton="Ok" buttonRounded/> );

        const form = screen.getByRole('form');
        const button = screen.getByRole('button', {name: /Ok/i});

        expect(form).toHaveClass('search');
        expect(button).toHaveClass('rounded');
        
    });

    test('Should to render the alert when receive the alert property and the form is invalid', () => {
        
        render( <Form search alert="Oops, it occurred an error with the search" valid={false}/> );

        const form = screen.getByRole('form');
        const alert = screen.getByText(/Oops, it occurred an error with the search/i);
    
        expect(form).toHaveClass('search');
        expect(alert).toHaveClass('activated');

    });

});