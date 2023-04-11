import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import NavigationMenu from "../components/NavigationMenu";
import TopMenu from "../components/TopMenu";

NavigationMenu;
TopMenu;
Outlet;
Box;
function SharedLayout() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: "#cfe8fc",

          height: "100vh",
          width: "100vw",
        }}
      >
        <TopMenu />
        <Box sx={{ height: "100%", display: "flex" }}>
          <NavigationMenu />
          <Box
            sx={{
              display: "flex",
              minWidth: "fit-content",
              flex: 1,
              flexDirection: "column",
              pt: 14,
              px: 3,
              backgroundColor: "#FBDBAF",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SharedLayout;
