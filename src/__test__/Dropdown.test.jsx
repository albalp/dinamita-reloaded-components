import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {prettyDOM} from '@testing-library/dom';

import Dropdown from '../components/dropdown/DropDown';
import { MdArrowDropDown } from 'react-icons/md'

const options = [
    {
      id:1, 
      name: 'Mango',
    },
    {
        id:2, 
        name: 'Fresa',
      }
 ]

describe('Dropdown render', () => {
    it('should render the dropdown', () => {
        expect(render(<Dropdown />)).toMatchSnapshot();
    });

    it('should render the dropdown with title and options and icon', () => {
        render(<Dropdown title="Frutas" options={options} icon={<MdArrowDropDown />}/>)
        const title = screen.getByText(/Frutas/i);
        const inputValue = screen.getByDisplayValue(/Mango/i)

        expect(title).toBeInTheDocument();
        expect(inputValue).toBeInTheDocument();
        
    });
    // it('Should called the click', async()=>{
    //     const handleClick = jest.fn();
    //     render(<Dropdown title="Frutas" options={options} onClick={handleClick} />)
    //     const input = screen.getByDisplayValue(/Mango/i)
    //     expect(input).toBeInTheDocument();
        
    //     userEvent.click(input);
    //     const option = await waitFor(screen.getByText(/Fresa/i));

    //     //expect(input).toHaveBeenCalledWith(option);
    //     userEvent.click(option);
    //     expect(await screen.findByDisplayValue(/Fresa/i)).toBeInTheDocument();
    // });
    
})

describe('Dropdown clicks should work', () => {
    it("The dropdown should be clicked and need show options", async() => {

        render( <Dropdown title="Frutas" options={options} />);
        const dropdown = screen.getByRole('menu', {name: 'dropdown-project'});
        const input = screen.getByPlaceholderText(/Mango/i);
        userEvent.click(dropdown);
        fireEvent.change(input, {target: {value: 'Fresa'}});
        const opt = screen.queryByRole('group', {name: 'group-options-project'});
    
        expect(input).toHaveValue('Fresa');
        expect(opt).toBeInTheDocument();
        
    });

    test('Should to show the options of when do click on the dropdown projects', () => {
        render( <Dropdown title="Frutas" options={options} />);

        const dropdown = screen.getByRole('menu', {name: 'Frutas'});
        fireEvent.click(dropdown);
        const opt = screen.queryByRole('group', {name: 'group-options-project'});
        const option = screen.getByText(/Delivery/i);

        expect(opt).toBeInTheDocument();
        expect(option).toBeInTheDocument();

    });

})