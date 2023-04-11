import React, { useState, useEffect, useContext, createContext } from "react";
import authHeader from "./authHeader";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const login = async (data) => {
    return fetch(`${import.meta.env.VITE_API_URL}/api/auth/login/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json()
    ).then(response => {
      if (response?.access) {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        localStorage.setItem('user', JSON.stringify(response));
        setUser(response);
        return({success: true, msg: { title: "Logged in!", description: `Welcome ${response.username}, you've been logged in.`}})
      } else {
        return({success: false, msg: {
          title: "Failed to login!",
          description: "If you do not have an account, use the Create Account button below.",
          type: "error",
        }})
      }
    }).catch(error => {
      console.error("Error:", error);
      return({success: false, msg: {
        title: "Login Error!",
        description: error,
        type: "error",
      }})
    });
  };

  const logout = async () => {
    let data = {refresh: localStorage.getItem('refresh_token')};
    return fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: authHeader()
    }).then(response => response.json()
    ).then(response => {
      localStorage.clear();
      setUser(null);
    }).catch(error => {
      localStorage.clear();
      setUser(null);
    });
  };

  const checkAuth = () => {
    try {
      let temp_user = localStorage.getItem('user');
      if (temp_user) temp_user = JSON.parse(temp_user);
      if (temp_user) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  useEffect(() => {
    try {
      let temp_user = localStorage.getItem('user');
      if (temp_user) temp_user = JSON.parse(temp_user);
      if (temp_user) {
        setUser(temp_user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
    return () => null;
    // TODO Fetch user from backend
  }, []);

  return {
    user,
    login,
    logout,
    checkAuth,
  };
}
