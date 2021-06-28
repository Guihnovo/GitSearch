import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';
import Star from './pages/star';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" exact component={ Repos } />
            <Route path="/star" exact component={ Star } />
        </Switch>
    </BRouter>
);

export default Routes;