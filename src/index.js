import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import SignIn from './Components/SignIn'
import Home from './Components/Home';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/admin" component={Dashboard} />
      <Redirect from="/" to="/home" />
      <Redirect from="/admin" to="/admin/businesses" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
