//import Header from './header';
import { render, screen } from '@testing-library/react';
import { Primary } from './stories/Header.stories';

    test("Renders properly", () => {
        render(<Primary {...Primary.args} />)
        
    })
