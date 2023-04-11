import { TextField, Toolbar, Typography, Box, Button } from "@mui/material";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import Clock from "../Clock";

function TopMenu() {
  const currentDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date());

  return (
    <>
      <Toolbar
        disableGutters
        sx={{
          px: 8,
          py: 2,
          backgroundColor: "#fff",
          boxShadow: "0px 8px 30px 0px rgba(0,0,0,0.64)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <Button sx={{ color: "inherit", display: "flex", gap: 2 }}>
          <AdminPanelSettingsTwoToneIcon fontSize="large" />
          <Typography>INVENTORY</Typography>
        </Button>
        <TextField
          placeholder="ПОИСК"
          size="small"
          margin="none"
          sx={{ marginLeft: 8, width: "30vw", maxWidth: "35vw", padding: 0 }}
        />
        <Box sx={{ display: "flex", marginLeft: "auto", gap: 2 }}>
          <Box sx={{}}>
            <Typography>Today</Typography>
            <Typography>{currentDate}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "flex-end",
            }}
          >
            <AccessTimeTwoToneIcon fontSize="small" />
            <Clock />
          </Box>
        </Box>
      </Toolbar>
    </>
  );
}

export default TopMenu;
