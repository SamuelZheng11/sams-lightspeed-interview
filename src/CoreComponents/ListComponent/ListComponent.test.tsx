import ListComponent from './ListComponent';
import { screen, render } from '@testing-library/react';

describe('ListComponent', () => {
    it('should render ListComponent with children elements when not loading', () => {
        render(
            <ListComponent isLoading={false}>
                <div></div>
            </ListComponent>
        );
        const listComponent = screen.getByTestId('list-child');
        expect(listComponent).toBeInTheDocument();
    });

    it('should render ListComponent with loading text and spinner when loading', () => {
        render(
            <ListComponent isLoading={true}>
                <div></div>
            </ListComponent>
        );
        const listComponent = screen.getByTestId('loading');
        expect(listComponent).toBeInTheDocument();
    });
});
