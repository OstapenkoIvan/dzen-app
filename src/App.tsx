import { useState } from "react";
import { Container, CssBaseline, Box } from "@mui/material";

import TopMenu from "./modules/components/TopMenu";
import NavigationMenu from "./modules/components/NavigationMenu";

import "./App.css";

function App() {
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
        <NavigationMenu />
      </Container>
    </>
  );
}

export default App;
