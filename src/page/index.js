/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Aboutus from "./about_us";
import Box from "@mui/material/Box";
import Appbar from "../components/appbar";
import NavDrawer from "../components/nav_drawer";

const Webpages = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar />
      <Router>
        <NavDrawer />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/aboutus"
            render={(props) => <Aboutus {...props} />}
          />
        </Switch>
      </Router>
    </Box>
  );
};
export default Webpages;
