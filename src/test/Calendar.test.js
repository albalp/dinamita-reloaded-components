import '@testing-library/jest-dom/extend-expect';
import Calendar from '../components/Calendar/Calendar';
import {render, screen, fireEvent} from '@testing-library/react';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

beforeEach(() => {
    render(<Calendar/>);
});

describe('<Calendar/> - Render elements of component in the interface', () => {

    test('Are in the document calendar component', () => {

        const buttonPrevious = screen.getByRole('button', {name: 'button previous month'});
        const buttonNext = screen.getByRole('button', {name: 'button next month'});
        const buttonReset = screen.getByRole('button', {name: 'button reset date'});
        const month = screen.getByText(/April/i);
        const year = screen.getByText(/2022/);
        const sund = screen.getByText(/Sund/i);
        const day = screen.getByText('10');
        const legend = screen.getByText(/You are selecting a date different to current/i);

        expect(buttonPrevious).toBeInTheDocument();
        expect(buttonNext).toBeInTheDocument();
        expect(buttonReset).toBeInTheDocument();
        expect(month).toBeInTheDocument();
        expect(year).toBeInTheDocument();
        expect(sund).toBeInTheDocument();
        expect(day).toBeInTheDocument();
        expect(legend).toBeInTheDocument();
        
    });
});

describe('<Calendar> - Current date should be correct', () => {

    const currentDate = new Date();

    test('Month shown should be the current month', () => {
        
        const currentMonth = months[currentDate.getMonth()];
        const month = screen.getByText(/April/i);
        
        expect(month).toHaveTextContent(currentMonth);
    });
    
    test('Year shown should be the current year', () => {
        
        const currentYear = currentDate.getFullYear();
        const year = screen.getByText(/2022/);
        
        expect(parseInt(year.textContent)).toEqual(currentYear);
    });
    
    test('Current day should be selected in the calendar', () => {
        
        const currentDay = currentDate.getDate();
        const calendarDay = screen.getByText(currentDay);

        expect(calendarDay).toHaveClass('calendar-month-day--active');
        
    });

});

describe('<Calendar> - Functionality', () => {
    const currentDate = new Date();

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

         console.log(daySelected.classList.contains('.calendar-month-day--selected'));
        
    });

});