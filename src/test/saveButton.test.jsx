import "@testing-library/jest-dom";
import SaveButton from '../components/SaveButton';
import {render, screen, fireEvent} from "@testing-library/react";

describe("Button tests", () => {

    const saveData = jest.fn();

    render(<SaveButton label='Click me' onClick={saveData}/>);

    const button = screen.getByRole('button');

    it('Should button be in the document', () =>{

        expect(button).toBeInTheDocument();
    });

    it('Should be called', () =>{

        fireEvent.click(button);

        expect(saveData).toHaveBeenCalled(1);
    })

});

 //Prueba unitaria
    // it('Should render', ()=>{
      
    //     expect(render(<SaveButton />)).toMatchSnapshot();
    // })