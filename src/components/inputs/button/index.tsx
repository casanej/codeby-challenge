import React, { ReactElement } from 'react'
import { ButtonStyled } from './index.style'

interface Props {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick: () => void;
}

export const Button = (props: Props): ReactElement => {
    return (
        <ButtonStyled
            color={props.color || 'dark'}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </ButtonStyled>
    );
};
