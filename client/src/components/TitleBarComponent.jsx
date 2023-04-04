import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import MenuIconButton from "./MenuIconField";

function TitleBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <MenuIconButton />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Golden Dragon Blog
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBarComponent;
