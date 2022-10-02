import PointOfSalesComponent from './PointOfSalesComponent';
import { screen, render } from '@testing-library/react';

describe('PointOfSalesComponent', () => {
    it('should render PointOfSalesComponent', () => {
        render(<PointOfSalesComponent />);
        const posComponent = screen.getByTestId('pos');
        expect(posComponent).toBeInTheDocument();
    });
});
