import "@testing-library/jest-dom";
import SaveButton from '../components/SaveButton';
import {render, screen, fireEvent} from "@testing-library/react";



describe("Button tests", () => {
    
    it('Should button be in the document', () =>{

        render(<SaveButton label='Click me'/>);
        const button = screen.getByRole('button', {name: 'Click me'});

        expect(button).toBeInTheDocument();

    });

    it('Should be called', () =>{

        
        const mockHandler = jest.fn();
        render(<SaveButton label='Click me' onClick={mockHandler}/>);
        const button = screen.getByText('Click me');
        
        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(1);
    })

});