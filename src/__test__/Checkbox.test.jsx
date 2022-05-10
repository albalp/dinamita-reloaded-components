import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Form from '../components/Form/Form/Form';
import Checkbox from '../components/Form/Checkbox/Checkbox';
import {prettyDOM} from '@testing-library/dom';
   
beforeEach(() => {
    render(
        <Form>
            <Checkbox name="dog" rounded label="Dog"/>
            <Checkbox name="cat" rounded label="Cat" secondary/>
            <Checkbox name="hamster" rounded label="Hamster" tertiary/>
        </Form>
    ); 
});   

describe('<Checkbox> - Testing render of the checkbox component', () => {
    
    test('Should be in the document the checkbox default variant', () => {
        const checkbox = screen.getByLabelText(/Dog/i);
        const checkboxSecondary = screen.getByLabelText(/Cat/i);
        const checkboxTertiary = screen.getByLabelText(/Hamster/i);

        expect(checkbox).toBeInTheDocument();
        expect(checkboxSecondary).toBeInTheDocument();
        expect(checkboxTertiary).toBeInTheDocument();
    });
 
});
 
describe('<Checkbox> - Testing of checked event of the checkbox component', () => {
    
    test('Should be checked when the user does clicking the checkbox default variant', () => {

        const checkbox = screen.getByLabelText(/Dog/i);

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

    });

    test('Should be checked when the user does clicking the checkbox secondary variant', () => {

        const checkboxSecondary = screen.getByLabelText(/Cat/i);

        fireEvent.click(checkboxSecondary);

        expect(checkboxSecondary).toBeChecked();

    });

    test('Should be checked when the user does clicking the checkbox tertiary variant', () => {

        const checkboxTertiary = screen.getByLabelText(/Hamster/i);

        fireEvent.click(checkboxTertiary);

        expect(checkboxTertiary).toBeChecked();

    });

}); 
 
describe('<Checkbox> - Testing of properties', () => {
    
    test('Should be rounded if have de rounded property', () => {

        const checkbox = screen.getByLabelText(/Dog/i).parentNode;
        const checkboxSecondary = screen.getByLabelText(/Cat/i).parentNode;
        const checkboxTertiary = screen.getByLabelText(/Hamster/i).parentNode;

        expect(checkbox).toHaveClass('rounded');
        expect(checkboxSecondary).toHaveClass('rounded');
        expect(checkboxTertiary).toHaveClass('rounded');

    });

});