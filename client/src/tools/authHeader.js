function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = localStorage.getItem('access_token');
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
  if (isLoggedIn && isApiUrl) {
      return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      };
  } else {
      return {};
  }
}

export default authHeader
