import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header';
import {prettyDOM} from '@testing-library/dom';
// import { Primary } from './stories/Header.stories';

describe('<Header> - Testing of the render of the header component', () => {

    test('Should to be in the document the header', () => {

        render(<Header label="Create Activity"/>);
        const header = screen.getByText(/Create Activity/i);

        expect(header).toBeInTheDocument();

    });

    test('Should do click on the button of the header component', () => {

        const mockHandler = jest.fn();

        render(<Header label="Create Activity" closeModal={mockHandler} />);

        const button = screen.getByRole('button', {name: 'header button'});

        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(1);
        
    });

});
