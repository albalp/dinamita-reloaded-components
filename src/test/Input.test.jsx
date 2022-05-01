import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Input from '../components/Form/Input';
import App from '../App';

beforeEach(() => {
    render(<Input name="name" placeholder="Name" legend="Invalid name" valid={true}/>);
});

describe('<Input> - Testing input component default variant', () => {    

    test('Should to show the input component default', () => {
        
        const input = screen.getByPlaceholderText(/Name/i);
        expect(input).toBeInTheDocument();

    });
    
    test('Should to hidde error legend when the component load for first time', () => {

        const input = screen.getByPlaceholderText(/Name/i);
        const legend = screen.getByText(/Invalid name/i);

        expect(legend).not.toHaveClass('activated');

    });

  
    
});