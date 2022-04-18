import React from 'react';
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import SaveButton from '../components/saveButton.jsx';

describe("Button tests", ()=>{
    const saveData = jest.fn()
    render(<SaveButton />);
    const button = screen.getByRole('button');
    
    //Prueba unitaria
    it('Should render it exists', () =>{
        expect(button).toBeInTheDocument();
    });

    /*
    it('Should be called', () =>{
        render(<button onClick={saveData}>save</button>);
        fireEvent.click(button)
        //user.click(button)

        //expect();
    })*/

})

