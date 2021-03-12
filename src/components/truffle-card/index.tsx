import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useEffect, useState } from 'react'
import { useStores } from '../../stores';
import { Item } from '../../stores/index';
import { Button } from '../inputs';
import { NaverCardBody, NaverCardFooter, NaverCardHeader, NaverCardStyle } from './index.style';

interface Props {
    truffleInfo: Item
}

export const TruffleCard = (props: Props): ReactElement => {
    const { truffleStore } = useStores();
    const [quantity, setQuantity] = useState<number>(0);

    const manageCart = (type: 'add' | 'subtract') => {
        if(type === 'add') {
            setQuantity(quantity + 1 );
        } else if (type === 'subtract') {
            if(quantity - 1 >= 0) {
                setQuantity(quantity - 1);
            }
        }

        truffleStore.manageCart(type, props.truffleInfo.price)
    }

    useEffect(() => {
        truffleStore.updateCart(props.truffleInfo.id, quantity, props.truffleInfo)
    }, [quantity])

    return (
        <>
            <NaverCardStyle>
                <NaverCardHeader>
                    <img src={props.truffleInfo.imageUrl} width='100%' />
                </NaverCardHeader>
                <NaverCardBody>
                    {props.truffleInfo.name}
                </NaverCardBody>
                <NaverCardFooter>
                    <Button onClick={() => manageCart('subtract')}> <FontAwesomeIcon icon={faMinus} /> </Button>
                    <div>{quantity.toString().padStart(2, '0')}</div>
                    <Button onClick={() => manageCart('add')}> <FontAwesomeIcon icon={faPlus} /> </Button>
                </NaverCardFooter>
            </NaverCardStyle>
        </>
    );
};
