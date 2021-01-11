import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Update from '../screens/Update';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}
