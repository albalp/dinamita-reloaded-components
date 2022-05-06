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

    expect(modal).toHaveClass('is-open');

});

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