import "@testing-library/jest-dom/extend-expect";
import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "../components/dropdown/DropDown";
import { MdArrowDropDown } from "react-icons/md";
import {prettyDOM} from '@testing-library/dom';
 
const options = [
  {
    id: 1,
    name: "Mango",
  },

  {
    id: 2,
    name: "Fresa",
  },
];
 
describe("Dropdown", () => {

  it("should render the dropdown", () => {
    expect(render(<Dropdown />)).toMatchSnapshot();
  });

  it("should render the dropdown with title and options and icon", () => {
    render(
      <Dropdown title="Frutas" options={options} icon={<MdArrowDropDown />} />
    );

    const title = screen.getByText(/Frutas/i);

    const inputValue = screen.getByDisplayValue(/Mango/i);

    expect(title).toBeInTheDocument();

    expect(inputValue).toBeInTheDocument();
  });

  test('Should to show "No options" message', () => {
    render(
      <Dropdown title="Frutas" options={[]} icon={<MdArrowDropDown />} />
    );

    const dropdown = screen.getByRole('menu', {name: 'dropdown-frutas'});

    fireEvent.click(dropdown);

    // const options = screen.queryByRole('group', {name: 'group-options-frutas'});
    const message = screen.getByText(/No options found/i);

    expect(message).toBeInTheDocument();
  })
  

}) 
 
describe('Dropdown clicks should work', () => {
  it("The dropdown should be clicked and need show options", async() => {

      render( <Dropdown title="Frutas" options={options} />);
  
      const input = screen.getByPlaceholderText(/Mango/i);
      userEvent.click(input);
      fireEvent.change(input, {target: {value: 'Fresa'}});
  
      expect(input).toHaveValue('Fresa');
      
  });
})
 
describe('Dropdown should be render mode dark or light', ()=> {
  it('should be light dropdown', () => {
    render(<Dropdown title="Frutas" options={options} dark />)

    const dropdown = screen.getByText(/Frutas/i).parentNode;

    expect(dropdown).toHaveClass('dark');

  })
  it('should be dark dropdown', () => {
    render(<Dropdown title="Frutas" options={options} light />)

    const dropdown = screen.getByText(/Frutas/i).parentNode;

    expect(dropdown).toHaveClass('light');

  })
})

it('should have border radius', () => {

  render(<Dropdown title="Frutas" options={options} borderRadius />)
  
  const dropdown = screen.getByRole('menu', {name: 'dropdown-frutas'}).parentNode;
  expect(dropdown).toHaveClass('borderRadius');
  
}) 