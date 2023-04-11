import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import MenuIconButton from "./MenuIconField";
import { Link } from "react-router-dom"
import { useAuth } from '../services/auth';

function TitleBarComponent() {
  const auth = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <MenuIconButton />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Golden Dragon Blog
          </Typography>
          {auth.user ? <Link className="btn-link" to="/logout">Logout</Link> : <Link className="btn-link" to="/login">Login</Link>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBarComponent;
