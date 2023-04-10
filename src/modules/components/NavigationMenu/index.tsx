import { forwardRef, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { navLinks } from "../../../constants";
import UserAvatar from "../UserAvatar";

function NavigationMenu() {
  return (
    <>
      <Toolbar
        disableGutters
        sx={{
          px: 1,
          py: 3,
          backgroundColor: "#F1F1F1",
          height: "100%",
          width: "200px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <UserAvatar />
        <List
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {navLinks.map((link) => (
            <ListItem disablePadding key={link.name}>
              <ListItemButton
                component="a"
                href={link.to}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </>
  );
}

export default NavigationMenu;
