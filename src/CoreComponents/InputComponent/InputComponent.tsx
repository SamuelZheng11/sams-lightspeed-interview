import React, { useEffect, useState } from 'react';
import { Text } from '@ls-jacob-lawrence/fe-interview-ds';

import './InputComponent.scss';

export interface InputComponentProps {
    value: number;
    stepSize?: number;
    onValueChange?: (newValue: number) => void;
}

export type ButtonType = 'subtract' | 'add';

export default function InputComponent(props: InputComponentProps) {
    const [inputValue, updateInputValue] = useState(props.value);

    useEffect(() => {
        if (props?.onValueChange) {
            props?.onValueChange(inputValue);
        }
    }, [inputValue]);

    const updateValue = (buttonType: ButtonType) => {
        switch (buttonType) {
            case 'subtract':
                if (inputValue < 1) {
                    return;
                }
                updateInputValue(inputValue - (props.stepSize ?? 1));
                break;

            case 'add':
                updateInputValue(inputValue + (props.stepSize ?? 1));
                break;
        }
    };

    return (
        <div data-testid="input" className="chip-input">
            <div
                className="left-button input-button"
                onClick={() => updateValue('subtract')}
            >
                <Text size="large">-</Text>
            </div>
            <div className="chip-input-value-container">
                <Text
                    className="chip-input-value-text"
                    size="small"
                    bold={true}
                >
                    {inputValue}
                </Text>
            </div>
            <div
                className="right-button input-button"
                onClick={() => updateValue('add')}
            >
                <Text size="large">+</Text>
            </div>
        </div>
    );
}

InputComponent.defaultProps = {
    stepSize: 1,
    onValueChange: function () {},
};
