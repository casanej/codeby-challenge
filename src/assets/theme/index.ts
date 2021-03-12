import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme, PalletModel } from './pallets';

export * from './pallets/pallet-model';

interface GlobalStyleProps {
    readonly theme: PalletModel;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: ${props => props.theme.currentPallet.background.primary};
        color: ${props => props.theme.currentPallet.text.primary};
        font-family: sans-serif;

        width: 100%;
        height: 100vh;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }

        &:active {
            text-decoration: none;
        }
    }

    #root {
        height: 100vh;
    }

    input, button, select {
        width: 100%;
    }
`

export interface ThemesPallet {
    light: PalletModel
    dark: PalletModel
}

export interface ThemePatternPallet {
    light: PalletModel
    dark: PalletModel
}

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: ThemePatternPallet;
        currentPallet: PalletModel;
    }
}

export const theme = {
    pallet: {
        dark: darkTheme,
        light: lightTheme,
    },
    currentPallet: lightTheme
} as DefaultTheme;
