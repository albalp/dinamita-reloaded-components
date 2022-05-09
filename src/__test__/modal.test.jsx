<<<<<<< HEAD
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
    
=======
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../components/modal/modal";
import Modals from "../components/modal/modals";
import { useModal } from "../components/modal/useModal";
import { prettyDOM } from "@testing-library/dom";
import SaveButton from "../components/SaveButton";

test("It must to be on the document", () => {
  render(
    <>
      <SaveButton label="Click" />
      <Modal title="Modal" />
    </>
  );

  const modal = screen.getByText(/Modal/i).parentNode.parentNode;
  const button = screen.getByRole("button", { name: /Click/i });

  expect(button).toBeInTheDocument();
  expect(modal).toBeInTheDocument();
});

test("The button should be clicked and it must to test if it is open", () => {

    render( <SaveButton label="Open modal" onClick={() => open = true} />);

    let open = false;
    const button = screen.getByRole("button", { name: /Open modal/i });

    fireEvent.click(button);

    render( <Modal title="Modal Form" isOpen={open}></Modal>);
    const modal = screen.getByText(/Modal Form/i).parentNode.parentNode.parentNode;

>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
    expect(modal).toHaveClass('is-open');

});

<<<<<<< HEAD
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
=======
test('Should to have the border radius class when receive the radius property', () => {

    render( <Modal title="Modal Form" isOpen={true} borderRadius ></Modal>);
    const modal = screen.getByText(/Modal Form/i).parentNode.parentNode;

    expect(modal).toHaveClass('storybook-modal--border-radius');
});

test('propagacion', () => {
    let open = false;
    render( <Modal label="Modal" onClick={open} />);

    const modal = screen.getByText(/Modal/i).parentNode.parentNode;
    const clickEvent = new MouseEvent('click');
    Object.assign(clickEvent, {stopPropagation: jest.fn()});

    fireEvent.click(modal, clickEvent);
    expect(clickEvent.stopPropagation).toHaveBeenCalledTimes(1);
  })
>>>>>>> b49f7414e2386f07778a0b1d7b95345e1cb6547c
