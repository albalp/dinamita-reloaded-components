import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Form from '../components/Form/Form/Form';

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