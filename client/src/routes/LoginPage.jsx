import { TextField, Grid, Button, Box } from "@mui/material";
import { useReducer, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import useNotify from "../notifications/useNotify";


function LoginPage() {
  const notify = useNotify();
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: ""
    }
  );

  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/"/>;
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = formInput;

    fetch(`${import.meta.env.VITE_API_URL}/api/auth/login/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response?.access) {
          localStorage.setItem('access_token', response.access);
          localStorage.setItem('refresh_token', response.refresh);
          console.log('Added token to localStorage')
          notify({ title: "Logged in!", description: "You've been logged in."})
          setToDashboard(true);
        } else {
          notify({
            title: "Failed to login!",
            description: "If you do not have an account, use the Create Account button below.",
            type: "error",
            timeout: 100000,
          })
        }
      })
      .catch(error => console.error("Error:", error));
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <>
      <Grid container spacing={2} className="login-page-container">
        <Grid item xs={2} lg={4}></Grid>
        <Grid item xs={8} lg={4}>
          <Box className="login-box" sx={{display: 'flex', flexDirection: 'column'}}>
            <form onSubmit={handleSubmit}>
            <TextField
              sx={{margin: '0.75rem 0'}}
              required
              fullWidth
              name="username"
              id="login-username-input"
              label="Username"
              onChange={handleInput}
            />
            <TextField
              sx={{margin: '0.75rem 0'}}
              required
              fullWidth
              name="password"
              id="login-password-input"
              type="password"
              label="Password"
              autoComplete="current-password"
              onChange={handleInput}
            />
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
            <Button
              type="submit"
              sx={{margin: '0.25rem 0'}}
              color="primary"
              variant="contained"
              disabled={false}
            >Login</Button>
            <Button
              sx={{margin: '0.25rem 0'}}
              color="primary"
              variant="contained"
            >Create Account</Button>
            </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
