import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DefaultLayout2 from '../Layout/DefaultLayout2';
import * as Pages from '../pages';
import AuthRoute from '../routes/AuthRoute';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout2>
                <Switch>
                    <AuthRoute exact path="/" component={Pages.Count} />
                    <AuthRoute exact path="/users" component={Pages.Users} />
                    {/* <Route path="/" component={Pages.Count} /> */}
                    <Route exact path="/admin-login" component={Pages.Login} />
                </Switch>
            </DefaultLayout2>
        </BrowserRouter>
    );
}

export default App;
