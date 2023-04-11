import { TextField, Grid, Button, Box } from "@mui/material";
import { useEffect } from "react";
import { logout } from "../services/auth.service.js";
import { useAuth } from "../services/auth.jsx";


function LogoutPage() {
  const auth = useAuth();
  useEffect(() => {
    auth.logout();
  }, [])
  return (
    <>
      <h1>Logout page goes here</h1>
    </>
  );
}

export default LogoutPage;
