    import { render, screen } from '@testing-library/react';
    import TextArea from '../components/textArea/textArea';
    import "@testing-library/jest-dom/extend-expect";
    import {prettyDOM} from '@testing-library/dom';
     
    //Testing the label of the textarea
    describe('TextArea rendering', () =>{
         
        it('Renders the label', () =>{
            render(< TextArea label="Comments" />);
            const textArea = screen.getByLabelText(/Comments/i);
            // console.log(view)
            // expect(label).toBeInTheDocument()
        });
    });   
  