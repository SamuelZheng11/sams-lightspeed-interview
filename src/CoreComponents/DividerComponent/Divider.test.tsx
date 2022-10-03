import Divider from './DividerComponent';
import { screen, render } from '@testing-library/react';

describe('Divider', () => {
    it('should render divider', () => {
        render(<Divider />);
        const divider = screen.getByTestId('divider');
        expect(divider).toBeInTheDocument();
    });
});
