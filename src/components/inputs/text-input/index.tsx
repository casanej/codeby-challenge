import React, { ReactElement } from 'react'
import { InputStyled } from './index.style';

interface Props {
    label: string;
    id: string;
    value?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    onChange: (value: string, name: string) => void;
}

export const Input = (props: Props): ReactElement => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <InputStyled
                id={props.id}
                name={props.name}
                type={props.type ? props.type : 'text'}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value, props.name || 'default')}
            />
        </>
    );
};
