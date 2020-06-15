import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DefaultLayout2, FullSizeLayout } from '../layouts';
import * as Pages from '../pages';
import AuthRoute from '../routes/AuthRoute';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Pages.Login}>
                    <FullSizeLayout>
                        <Pages.Login />
                    </FullSizeLayout>
                </Route>
                <DefaultLayout2>
                    <Switch>
                        <AuthRoute exact path="/" component={Pages.Count} />
                        <AuthRoute exact path="/users" component={Pages.Users} />
                        <Route component={Pages.NotFound} />
                    </Switch>
                </DefaultLayout2>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
