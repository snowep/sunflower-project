/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Aboutus from "./about_us";
const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={Aboutus} />
    </Router>
  );
};
export default Webpages;
