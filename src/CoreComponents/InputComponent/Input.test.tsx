import InputComponent from './InputComponent';
import { screen, render } from '@testing-library/react';

describe('InputComponent', () => {
    it('should render InputComponent', () => {
        render(<InputComponent value={1} />);
        const input = screen.getByTestId('input');
        expect(input).toBeInTheDocument();
    });
});
