import styled from 'styled-components';

export const NaverCardStyle = styled.div<{ fullscreen?: boolean; }>`
    display: flex;
    flex-direction: column;

    width: 14rem;
    height: 500px;
    margin: 0 10px;

    ${props => props.fullscreen && `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        margin: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(100, 100, 100, .75);
        z-index: 9999;

        ${NaverCardContent} {
            display: flex;
            flex-direction: row;
            width: 70%;

            div {
                background-color: white;
            }

            ${NaverCardHeader} {
                box-shadow: none;
                transition: none;
                width: 40%;
                border-radius: 10px 0px 0px 10px;

                &:hover {
                    cursor: context-menu;
                    transform: scale(1.0);
                    transition: none;
                }

                img {
                    border-radius: 10px 0px 0px 10px;;
                }
            }

            ${NaverCardBody} {
                margin: 0;
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 0px 10px 10px 0px;
                position: relative;
                padding-left: 20px;
            }
        }
    `}

    @media (max-width: 900px) {
        width: 16rem;

        ${props => props.fullscreen && `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            margin: 0;
            justify-content: center;
            align-items: center;
            background-color: rgba(100, 100, 100, .75);
            z-index: 9999;

            ${NaverCardContent} {
                display: flex;
                flex-direction: column;
                width: 70%;
                align-items: center;

                div {
                    background-color: white;
                }

                ${NaverCardHeader} {
                    box-shadow: none;
                    transition: none;
                    width: 70%;
                    border-radius: 10px 10px 0px 0px;

                    &:hover {
                        cursor: context-menu;
                        transform: scale(1.0);
                        transition: none;
                    }

                    img {
                        border-radius: 10px 10px 0px 0px;
                    }
                }

                ${NaverCardBody} {
                    margin: 0;
                    width: 66%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 0px 0px 10px 10px;
                    position: relative;
                    padding-left: 20px;
                }
            }
        `}
    }
`

export const NaverCardSubtitles = styled.p`
    font-weight: bold;
`;

export const NaverCardContent = styled.div``;

export const NaverCardBlock = styled.div``;

export const NaverCardHeader = styled.div`
    border-radius: 5px 0 5px 0;
    border: 1px solid darkgray;
`;

export const NaverCardBody = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;

    div {
        margin: 10px 0;

        > &:first-child {
            font-weight: bold;
        }
    }
`;

export const NaverCardClose = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
`;

export const NaverCardFooter = styled.div`
    display: flex;
    flex-direction: row;
    
    * {
        line-height: 1.2em;
        text-align: center;
        width: 100%;
    }
`;

export const NaverCardActionButton = styled.div`
    cursor: pointer;
    font-size: 1.3em;
`