    import { render, screen } from '@testing-library/react';
    import TextArea from './textArea';
    //Testing the label of the textarea
    describe('TextArea rendering', () =>{
        it('Renders the label', () =>{
            const view = render(< TextArea />)
            screen.getByText('Comments')
            console.log(view)
        });


    })