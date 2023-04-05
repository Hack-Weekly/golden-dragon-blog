import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import MenuIconButton from "./MenuIconField";
import { Link } from "react-router-dom"

function TitleBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <MenuIconButton />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Golden Dragon Blog
          </Typography>
          <Link className="btn-link" to="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBarComponent;
