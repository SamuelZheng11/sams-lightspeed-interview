import App from './App';
import { screen, render } from '@testing-library/react';

describe('App', () => {
    it('should render app', () => {
        render(<App />);
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
    });
});
