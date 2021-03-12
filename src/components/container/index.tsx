import React, { ReactElement } from 'react'
import { ContainerStyled } from './index.style';

interface Props {
    children: ReactElement | ReactElement[];
    alignVertical?: boolean;
    alignHorizontal?: boolean;
    fullscreen?: boolean;
}

export const Container = (props: Props): ReactElement => {
    return (
        <ContainerStyled
            alignVertical={props.alignVertical}
            alignHorizontal={props.alignHorizontal}
            fullscreen={props.fullscreen}
        >
            {props.children}
        </ContainerStyled>
    );
};
