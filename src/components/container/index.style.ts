import styled from 'styled-components';

interface ContainerStyledProps {
    alignVertical?: boolean;
    alignHorizontal?: boolean;
    fullscreen?: boolean;
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;

    background-color: ${props => props.theme.currentPallet.background.primary};

    ${props => props.alignVertical && 'align-items: center;'}
    ${props => props.alignHorizontal && 'justify-content: center;'}
    ${props => props.fullscreen && 'height: 100vh;'}
`