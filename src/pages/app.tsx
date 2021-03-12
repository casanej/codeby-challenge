import React, { ReactElement, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, theme } from '../assets';
import { Home } from './home';

const HomeApp = (): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState<PalletModel>(theme.pallet.light);

    useState(() => {
        setCurrentTheme(theme.pallet.light);
    })

    return (
        <React.Fragment>
            <ThemeProvider theme={{...theme, ...{ currentTheme: currentTheme }}} >
                <React.Fragment>
                    <GlobalStyle theme={theme} />
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </ThemeProvider>
        </React.Fragment>
    );
};

export { HomeApp };