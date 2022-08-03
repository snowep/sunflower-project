/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Appbar from "../components/appbar";
import NavDrawer from "../components/nav_drawer";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar />
      <NavDrawer />
    </Box>
  );
};
export default Home;
