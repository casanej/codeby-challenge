import styled from 'styled-components';

export const TruffleListStyled = styled.div`
    border: 1px solid lightgray;
    text-align: center;

    > div {
        line-height: 2em;
        border: 1px solid lightgray;
    }
`

export const TruffleListItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    > div {
        width: 100%;
        text-align: center;
    }
`