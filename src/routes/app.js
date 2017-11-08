import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';

import Login from '../screens/Login';
import Label from '../screens/Label';
import AddLabel from '../screens/AddLabel';

export const Routes =() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route  exact path='/label' component={Label}/>
                <Route path='/label/*' component={Label}/>
             </Switch>
        </BrowserRouter>
    )
}