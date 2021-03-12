import { Button, Container, TruffleCard, TruffleList, TruffleListItem, } from '../../components';
import React, { ReactElement, useEffect, useState } from 'react'
import { CartFreteGratis, HomeTruffleCard, HomeTopMenu, TruffleCartTotal } from './index.style';
import { Item } from '../../stores/index';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import { toJS } from 'mobx';

export const Home = observer((): ReactElement => {
    const { truffleStore } = useStores();
    const [truffleList, setTruffleList] = useState<Item[]>([]);

    useEffect(() => {
        truffleStore.getTruflles();
    }, [])

    useEffect(() => {
        setTruffleList(toJS(truffleStore.products));
    }, [JSON.stringify(truffleStore.products)]);

    return (
        <Container>
            <HomeTopMenu>
                <div><h1>Meu Carrinho</h1></div>
            </HomeTopMenu>
            <HomeTruffleCard>
                <div>
                    <div>
                        {
                            truffleStore.isLoading && <h1>Carregando Trufas...</h1>
                        }
                        {
                            !truffleStore.isLoading && truffleList &&
                            truffleList.map(product => <TruffleCard key={product.id} truffleInfo={product} />)
                        }
                        {
                            !truffleStore.isLoading && truffleList?.length === 0 && <h1>Não há trufas cadastradas</h1>
                        }
                    </div>
                    <div>
                        <h1>CARRINHO</h1>
                        {
                            truffleStore.cart &&
                                <TruffleList>
                                    {
                                        Object.keys(truffleStore.cart).map((key) => {
                                            const truffle = truffleStore.cart[parseInt(key)];
                                            const truffleQuantity: number = truffle.quantity as unknown as number;
                                            const truffleItem: Item = truffle.item as unknown as Item;

                                            return <TruffleListItem key={truffleItem.id} truffle={truffleItem} quantity={truffleQuantity} />

                                        })
                                    }
                                    <hr style={{margin: '10px 0'}} />
                                    {
                                        truffleStore.truffleTotalPrice >= 1000 &&
                                                <CartFreteGratis>Parabéns, sua compra tem frete grátis</CartFreteGratis>
                                    }
                                    <TruffleCartTotal>
                                        <div>Total</div>
                                        <div>{truffleStore.truffleQuantity} un.</div>
                                        <div>R$ {(truffleStore.truffleTotalPrice / 100).toFixed(2)}</div>
                                    </TruffleCartTotal>
                                    <div>
                                        <Button color={'info'} onClick={() => console.log('CHECKOUT')} style={{width: '50%', margin: '10px 0', fontWeight: 'bold'}}>Finalizar Compra</Button>
                                    </div>
                                </TruffleList>
                        }
                    </div>
                </div>
            </HomeTruffleCard>
        </Container>
    );
});
