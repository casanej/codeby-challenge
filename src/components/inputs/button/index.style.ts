import styled from 'styled-components';

interface ButtonProps {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';
}

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${props => props.theme.currentPallet.button[props.color]};
    color: ${props => props.theme.currentPallet.text[props.color]};
    cursor: pointer;

    font-size: 1em;
    line-height: 2.2em;
`