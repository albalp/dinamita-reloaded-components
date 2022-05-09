import '@testing-library/jest-dom/extend-expect';
import {render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

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

describe('Dropdown', () => {
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
    it('Should called the click', async()=>{
        const handleClick = jest.fn();
        render(<Dropdown title="Frutas" options={options} onClick={handleClick} />)
        const input = screen.getByDisplayValue(/Mango/i)
        expect(input).toBeInTheDocument();
        const option = await screen.findByText(/Fresa/i);
        userEvent.click(input);
        expect(option).toBeInTheDocument();
        userEvent.click(await screen.findByText(/Fresa/i));
        //expect(option).toBeInTheDocument();
    });
})