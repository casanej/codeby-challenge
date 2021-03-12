import React, { ReactElement } from 'react'
import { TruffleListStyled } from './index.style';
export * from './truffle-list-item';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export const TruffleList = (props: Props): ReactElement => <TruffleListStyled>{props.children}</TruffleListStyled>;
