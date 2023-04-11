import { TextField, Grid, Button, Box } from "@mui/material";
import { useReducer, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/auth.jsx"
import useNotify from "../notifications/useNotify";



function LoginPage() {
  const notify = useNotify();
  const auth = useAuth();
  const [newAccount, setNewAccount] = useState(false);
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    }
  );

  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/"/>;
  }

  const handleSubmit = async evt => {
    evt.preventDefault();

    let data = formInput;
    const login_result = await auth.login(data);
    if (login_result.msg) notify(login_result.msg);
    if (login_result.success) setToDashboard(true);
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
            {newAccount ? <>
              <TextField
                sx={{margin: '0.75rem 0'}}
                required
                fullWidth
                name="first_name"
                id="login-firstname-input"
                label="First Name"
                onChange={handleInput}
              />
              <TextField
                sx={{margin: '0.75rem 0'}}
                required
                fullWidth
                name="last_name"
                id="login-lastname-input"
                label="Last Name"
                onChange={handleInput}
              />
              <TextField
                sx={{margin: '0.75rem 0'}}
                required
                fullWidth
                name="email"
                id="login-email-input"
                label="Email"
                onChange={handleInput}
              />
            </> : null
            }
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
            <Button
              type="submit"
              sx={{margin: '0.25rem 0'}}
              color="primary"
              variant="contained"
              disabled={false}
            >{newAccount ? 'Create Account' : 'Login'}</Button>
            {newAccount ?
                <Button
                  sx={{margin: '0.25rem 0'}}
                  color="primary"
                  variant="contained"
                  onClick={() => setNewAccount(false)}
                >Back</Button> :
                <Button
                  sx={{margin: '0.25rem 0'}}
                  color="primary"
                  variant="contained"
                  onClick={() => setNewAccount(true)}
                >Create Account</Button>
            }
            </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
