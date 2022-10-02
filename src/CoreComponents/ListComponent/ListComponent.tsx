import React, { ReactElement } from 'react';
import { Text } from '@ls-jacob-lawrence/fe-interview-ds';
import { LOADING_TEXT } from './ListComponent.constants';

import './ListComponent.scss';

// See the component documentation https://ls-jacob-lawrence.github.io/fe-interview-ds/

export interface ListComponentProps {
    children: ReactElement | ReactElement[];
    isLoading?: boolean;
}

export default function ListComponent(props: ListComponentProps) {
    return (
        <React.Fragment>
            {props.isLoading ? (
                <div data-testid="loading" className="loading-container">
                    <div className="loading-spinner" />
                    <Text size="large" bold={true}>
                        {LOADING_TEXT}
                    </Text>
                </div>
            ) : (
                <div data-testid="list-child" className="list-container">
                    {props.children}
                </div>
            )}
        </React.Fragment>
    );
}

ListComponent.defaultProps = {
    isLoading: false,
};
