import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </BrowserRouter>
);
export default Routes;


