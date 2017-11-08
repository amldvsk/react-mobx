import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';

import Login from '../screens/Login';
import Label from '../screens/Label';
import AddLabel from '../screens/AddLabel';

export const LabelRoutes =() => {
    return (
        <Switch>
            <Route path='/label/add-label' component={AddLabel}/>
        </Switch>
    )
}