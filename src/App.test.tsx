import App from './App';
import { screen, render } from '@testing-library/react';

describe('App', () => {
    it('should render', () => {
        render(<App />);
        expect(screen.getByText('Hello Lightspeed')).toBeInTheDocument();
    });
});
