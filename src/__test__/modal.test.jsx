import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../components/modal/modal';
import Button from '../components/SaveButton';
import {prettyDOM} from '@testing-library/dom';
 
test('Should to render the modal component', () => {

    render(<Modal title="Modal"/>);

    const modal = screen.getByText(/Modal/i).parentNode.parentNode.parentNode;

    expect(modal).toBeInTheDocument();
 
}); 
 
test('Should to have the border radius class when receive the borderRadius property', () => {

    render(<Modal title="Modal" borderRadius/>);
 
    const modal = screen.getByText(/Modal/i).parentNode.parentNode;

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('storybook-modal--border-radius');

});

test('Should to have the modal dark class when receive the modeDark property', () => {

    render(<Modal title="Modal" modeDark/>);

    const modal = screen.getByText(/Modal/i).parentNode.parentNode;

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('storybook-modal--dark');

});
 
test('Should to have the modal light class when dont receive the modeDark property', () => {

    render(<Modal title="Modal"/>);

    const modal = screen.getByText(/Modal/i).parentNode.parentNode;

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('storybook-modal--light');

});

test('Should to have the background color received like property', () => {

    render(<Modal title="Modal" backgroundColor="salmon"/>);

    const modal = screen.getByText(/Modal/i).parentNode.parentNode;

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle('background-color: salmon');

});
 
test('Should to show the modal when do click on the button', () => {

    let isOpen = false;
    render(<Button label="Open modal" onClick={() => isOpen = true}/>);

    const button = screen.getByRole('button', {name: /Open modal/i});
    fireEvent.click(button);

    render(<Modal title="Create Activity" isOpen={isOpen}/>);
    const modal = screen.getByText(/Create Activity/i).parentNode.parentNode.parentNode;
     
    expect(modal).toHaveClass('is-open');

});

test('Should to hidde the modal when do click in the button close', () => {

    let isOpen = true;
    render(<Button label="Close modal" onClick={() => isOpen = false}/>);
    
    const button = screen.getByRole('button', {name: /Close modal/i});
    fireEvent.click(button);

    render(<Modal title="Create Activity" isOpen={isOpen}/>);
    const modal = screen.getByText(/Create Activity/i).parentNode.parentNode.parentNode;

    expect(modal).not.toHaveClass('is-open');

});

test('Should to prevent the event propagation', () => {

    render(<Modal title="Create Activity"/>);
    const modal = screen.getByText(/Create Activity/i).parentNode.parentNode;
    
    const isStopPropagation = fireEvent.click(modal);
    expect(isStopPropagation).toBe(true);

}); 
  