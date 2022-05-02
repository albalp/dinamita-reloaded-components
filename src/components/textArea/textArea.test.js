    import { render, screen } from '@testing-library/react';
    import TextArea from './textArea';
    
    describe('TextArea rendering', () =>{
        it('Renders the label', () =>{
            const view = render(< TextArea />)
            screen.getByText('Comments')
            console.log(view)
        });


    })