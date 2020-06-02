import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DefaultLayout2 from './Layout/DefaultLayout2';
import * as Pages from './pages';

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout2>
                <Switch>
                    {/* <Route path="/" component={Pages.Count} /> */}
                    <Route path="/count" component={Pages.Count} />
                    <Route path="/users" component={Pages.Users} />
                </Switch>
            </DefaultLayout2>
        </BrowserRouter>
    );
}

export default App;
