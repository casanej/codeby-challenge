import styled from 'styled-components';

export const HomeTopMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const HomeTruffleCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    
    padding: 30px 0;

    > div {
        display: flex;
        width: 100%;

        > div {
            width: 100%;
            display: flex;
            flex-direction: column;

            &:first-child {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }
`;

export const TruffleCartTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    > div {
        text-align: center;
        width: 100%;
    }
`

export const CartFreteGratis = styled.div`
    background-color: #c7ffa6;
    color: #217a00;
    font-weight: bold;
    width: 430px;
    font-size: 1.2em;
    margin: 20px auto;
    border-radius: 10px;
`