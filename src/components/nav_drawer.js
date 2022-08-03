/** @format */

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const drawerWidth = 240;

export default function NavDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" }
      }}>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List></List>
      </Box>
    </Drawer>
  );
}
