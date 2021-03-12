import React, { ReactElement } from 'react'
import { Item } from '../../stores/index';
import { TruffleListItemStyled } from './index.style';

interface Props {
    truffle: Item;
    quantity: number;
}

export const TruffleListItem = (props: Props): ReactElement => {
    const calculatePrice = () => (props.truffle.price / 100 * props.quantity).toFixed(2)

    return (
        <TruffleListItemStyled>
            <div>{props.truffle.name}</div>
            <div>{props.quantity} un.</div>
            <div>R$ {calculatePrice()}</div>
        </TruffleListItemStyled>
    );
};
