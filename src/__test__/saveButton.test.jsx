import "@testing-library/jest-dom";
import SaveButton from '../components/SaveButton';
import {render, screen, fireEvent} from "@testing-library/react";
import { BiCalendar } from "react-icons/bi";
import {prettyDOM} from '@testing-library/dom';

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
    
    test('Should to have beforeSave class when receive the beforeSave property', () => {

        render(<SaveButton label='Click me' beforeSave/>);

        const button = screen.getByRole('button', {name: /Click me/i});

        expect(button).toHaveClass('storybook-button--beforeSave');

    });

    test('Should to have radius class when receive the radius property', () => {

        render(<SaveButton label='Click me' borderRadius/>);

        const button = screen.getByRole('button', {name: /Click me/i});

        expect(button).toHaveClass('storybook-button--border-radius');

    });

    test('Should to have radius class when receive the radius property', () => {

        render(<SaveButton label='Click me' backgroundColor="salmon"/>);

        const button = screen.getByRole('button', {name: /Click me/i});

        expect(button).toHaveStyle('background-color: salmon');

    });

    test('Should to render the icon when receive the icon property', () => {

        render(<SaveButton label='Click me' icon={<BiCalendar/>} />);

        const button = screen.getByRole('button', {name: /Click me/i});
        const icon = button.querySelector('svg');

        expect(icon).toBeInTheDocument();
 
    });
});