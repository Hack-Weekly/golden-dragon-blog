import authHeader from "./authHeader.js";

export async function login(data) {
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
      console.log('Added token to localStorage')
      console.log(response.access)
      return({success: true, msg: { title: "Logged in!", description: "You've been logged in."}})
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
}

export async function logout() {
  let data = {refresh: localStorage.getItem('refresh_token')};
  return fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: authHeader()
  }).then(response => response.json()
  ).then(response => {
    localStorage.clear();
  }).catch(error => {
    localStorage.clear();
  });
}
