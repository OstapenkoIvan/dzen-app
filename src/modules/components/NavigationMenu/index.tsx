import { forwardRef } from "react";
import { NavLink as NavLinkBase } from "react-router-dom";
import { List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { NAVLINKS } from "../../../constants";
import UserAvatar from "../UserAvatar";

import "./NavigationMenu.css";

const NavLink = forwardRef<any, any>((props, ref) => (
  <NavLinkBase ref={ref} {...props} className={props.activeClassName} />
));

function NavigationMenu() {
  return (
    <>
      <Toolbar
        disableGutters
        sx={{
          px: 2,
          pt: 10,
          backgroundColor: "#fff",
          height: "100%",
          width: "200px",
          alignItems: "center",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <UserAvatar />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
            gap: 1,
          }}
        >
          {NAVLINKS.map((link) => (
            <ListItem
              disablePadding
              key={link.name}
              component={NavLink}
              to={link.to}
              activeClassName={({ isActive }: { isActive: boolean }) =>
                isActive ? "activeLink" : "notActiveLink"
              }
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText primary={link.name} sx={{ width: "fit-content" }} />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </>
  );
}

export default NavigationMenu;
