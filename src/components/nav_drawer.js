/** @format */

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const drawerWidth = 290;
const NavDrawer = (props) => {
  const { history } = props;
  const menu = [
    {
      title: "Overview",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    },
    {
      title: "Laporan",
      icon: <AssignmentIcon />,
      onClick: () => history.push("/aboutus")
    }
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="permanent">
      <Toolbar />
      <Divider />
      <List>
        {menu.map((text, index) => {
          return (
            <ListItem button key={text.title} onClick={text.onClick}>
              {text.icon ? <ListItemIcon>{text.icon}</ListItemIcon> : null}
              <ListItemText primary={text.title} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(NavDrawer);
