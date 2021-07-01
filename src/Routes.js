import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';
import Star from './pages/star';
import Following from './pages/following';
import Followers from './pages/followers'
const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
            <Route path="/star" exact component={ Star } />
            <Route path="/following" exact component={ Following } />
            <Route path="/followers" exact component={ Followers } />
        </Switch>
    </BRouter>
);

export default Routes;