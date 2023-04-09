import { useState } from "react";
import { Container, CssBaseline, Box } from "@mui/material";

import TopMenu from "./modules/components/TopMenu";

import "./App.css";
import { width } from "@mui/system";

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
      </Container>
    </>
  );
}

export default App;
