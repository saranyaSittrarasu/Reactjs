import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StartPage } from '../start-page/StartPage';
import { Header } from '../header/Header';

export function Router() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route exact={true} path={'/'} component={StartPage} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}
