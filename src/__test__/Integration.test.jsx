import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom';
import Integration from '../components/Integration';
 
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

beforeEach(() => {
    render(<Integration/>);
});

describe('Integration test - Rendering components', () => {

    const currentDate = new Date();

    test('Should to render all components in the application', () => {

        const modal = screen.getByText(/Create Activity/i).parentNode.parentNode.parentNode;
        const calendar = screen.getByText(currentDate.getFullYear()).parentNode.parentNode.parentNode;
        const dropdownProjects = screen.getByText(/Project/i).parentNode;
        const dropdownCategories = screen.getByText(/Categories/i).parentNode;
        const inputHours = screen.getByLabelText(/Hours/i);
        const inputTicket = screen.getByLabelText(/Ticket/i);
        const buttonAdd = screen.getByRole('button', {name: /Add activity/i});

        expect(modal).toBeInTheDocument();
        expect(calendar).toBeInTheDocument();
        expect(dropdownProjects).toBeInTheDocument();
        expect(dropdownCategories).toBeInTheDocument();
        expect(inputHours).toBeInTheDocument();
        expect(inputTicket).toBeInTheDocument();
        expect(buttonAdd).toBeInTheDocument();

    });

});

describe('Integration test - Modal component', () => {

    test('Should to show the modal when do click on the button', () => {

        const buttonAdd = screen.getByRole('button', {name: /Add activity/i});
        const modal = screen.getByText(/Create Activity/i).parentNode.parentNode.parentNode;

        fireEvent.click(buttonAdd);
        expect(modal).toHaveClass('is-open');

    });

    test('Should to hidde the modal when do click on the button of the header', () => {

        const buttonAdd = screen.getByRole('button', {name: /Add activity/i});
        const modal = screen.getByText(/Create Activity/i).parentNode.parentNode.parentNode;
        const buttonClose = screen.getByRole('button', {name: 'header button'});

        fireEvent.click(buttonAdd);
        fireEvent.click(buttonClose);
        
        expect(modal).not.toHaveClass('is-open');

    });

});

describe('Integration test - Calendar component', () => {

    const currentDate = new Date();

    test('Should to have to selected the current date correctlaly', () => {

        const currentMonth = screen.getByText(months[currentDate.getMonth()]);
        const currentYear = screen.getByText(currentDate.getFullYear());
        const currentDay = screen.getByText(currentDate.getDate());

        expect(currentMonth).toBeInTheDocument();
        expect(currentYear).toBeInTheDocument();
        expect(currentDay).toBeInTheDocument();
        expect(currentMonth).toHaveTextContent(months[currentDate.getMonth()]);
        expect(currentYear).toHaveTextContent(currentDate.getFullYear());
        expect(currentDay).toHaveTextContent(currentDate.getDate());
        expect(currentDay).toHaveClass('calendar-month-day--active');

    });

    test('Should to change to next month when do click in the button next', () => {

        const buttonNext = screen.getByRole('button', {name: 'button next month'});
        const nextMonth = months[currentDate.getMonth() + 1];
        const month = screen.getByText(months[currentDate.getMonth()]);

        fireEvent.click(buttonNext);

        expect(month).toHaveTextContent(nextMonth);

    });

    test('Should to change to previous month when do click in the button previous', () => {

        const buttonPrevious = screen.getByRole('button', {name: 'button previous month'});
        const prevMonth = months[currentDate.getMonth() - 1];
        const month = screen.getByText(months[currentDate.getMonth()]);

        fireEvent.click(buttonPrevious);

        expect(month).toHaveTextContent(prevMonth);

    });

    test('Should to select a new date when do click in a day of the month', () => {
        
        const day = screen.getByText(10);

        fireEvent.click(day);
 
        const daySelected = screen.getByText(10);

        expect(daySelected).toHaveClass('calendar-month-day--selected');
         
    }); 

    test('Should to decrement year when month is january and the user do click in the button previous month', () => {

        const buttonPrevious = screen.getByRole('button', {name: 'button previous month'});
        const month = screen.getByText(months[currentDate.getMonth()]);
        const year = screen.getByText(currentDate.getFullYear());
        
        for(let i = currentDate.getMonth(); i >= 0; i--) {
            
            fireEvent.click(buttonPrevious);
        }

        expect(month).toHaveTextContent(/December/);
        expect(year).toHaveTextContent(currentDate.getFullYear() - 1);
        
    });

    test('Should to increment year when month is december and the user do click in the button next month', () => {

        const buttonNext = screen.getByRole('button', {name: 'button next month'});
        const month = screen.getByText(months[currentDate.getMonth()]);
        const year = screen.getByText(currentDate.getFullYear());
        
        for(let i = currentDate.getMonth(); i <= 11; i++) {
            
            fireEvent.click(buttonNext);
        }

        expect(month).toHaveTextContent(/January/);
        expect(year).toHaveTextContent(currentDate.getFullYear() + 1);
        
    });

    test('Should to show the legend when the user select a date different to the current date', () =>{

        let dayValue = (currentDate.getDate() + 1 >= 28) ? 28 : currentDate.getDate() + 1;
        const daySelected = screen.getByText(dayValue);
        const legend = screen.getByText(/You are selecting a date different to current/i);

        fireEvent.click(daySelected);
        
        expect(legend).toHaveClass('activated');

    });

    test('Should to hidde the legend when the user select the current date', () => {

        let dayValue = (currentDate.getDate() + 1 >= 28) ? 28 : currentDate.getDate() + 1;
        const daySelected = screen.getByText(dayValue);
        const legend = screen.queryByText(/You are selecting a date different to current/i);
        
        fireEvent.click(daySelected);
        
        const currentDay = screen.getByText(currentDate.getDate());

        fireEvent.click(currentDay);

        expect(legend).not.toHaveClass('activated');

    });

    test('Should to reset the date selected to current date', () => {

        let dayValue = (currentDate.getDate() + 1 >= 28) ? 28 : currentDate.getDate() + 1;
        const buttonReset = screen.getByRole('button', {name: 'button reset date'});
        const daySelected = screen.getByText(dayValue);
        
        fireEvent.click(daySelected);
        
        fireEvent.click(buttonReset);
        
        const dayNotSelected = screen.getByText(dayValue);

        expect(dayNotSelected).not.toHaveClass('calendar-month-day--selected');

    });

});

describe('Integration test - Dropdown component', () => {

    test('Should to show the options of when do click on the dropdown projects', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-project'});
        fireEvent.click(dropdown);
        const options = screen.queryByRole('group', {name: 'group-options-project'});
        const option = screen.getByText(/Delivery/i);

        expect(options).toBeInTheDocument();
        expect(option).toBeInTheDocument();

    });

    test('Should to hidden the options of the project when select an option', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-project'});
        fireEvent.click(dropdown);

        const options = screen.queryByRole('group', {name: 'group-options-project'});
        const option = screen.getByText(/Delivery/i);

        fireEvent.click(option);

        expect(options).not.toBeInTheDocument();

    });

    test('Should to show the options when do click on the dropdown categories', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-categories'});
        fireEvent.click(dropdown);
        const options = screen.queryByRole('group', {name: 'group-options-categories'});

        expect(options).toBeInTheDocument();

    });

    test('Should to hidden the options of the categories when select an option', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-categories'});
        fireEvent.click(dropdown);

        const options = screen.queryByRole('group', {name: 'group-options-categories'});
        const option = screen.getByText(/Available/i);

        fireEvent.click(option);

        expect(options).not.toBeInTheDocument();

    });
 
    test('Should to select an option of the project dropdown and change the input value', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-project'});
        const input = screen.getByPlaceholderText(/Delivery/i);
        fireEvent.click(dropdown);

        const options = screen.queryByRole('group', {name: 'group-options-project'});
        const option = screen.queryByText(/Delivery/i);

        fireEvent.click(option);

        expect(input).toHaveValue('Delivery');

    });

    test('Should to select an option of the categories dropdown and change the input value', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-categories'});
        const input = screen.getByPlaceholderText(/Available/i);

        fireEvent.click(dropdown);

        const option = screen.getByRole('menuitem', {name: 'menuitem-resources management'});
        fireEvent.click(option);

        expect(input).toHaveValue('Resources Management');

    });
    
    test('Should to show the projects results of the filter', () => {

        const dropdown = screen.getByRole('menu', {name: 'dropdown-project'});
        const input = screen.getByPlaceholderText(/Delivery/i);

        fireEvent.click(dropdown);
        
        
        const options = screen.queryByRole('group', {name: 'group-options-project'});
        fireEvent.change(input, {target: {value: 'Del'}});

        const option = screen.getByRole('menuitem', {name: 'menuitem-delivery'});

        expect(option).toBeInTheDocument();

    });

});