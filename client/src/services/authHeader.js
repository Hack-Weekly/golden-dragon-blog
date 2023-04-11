export default function authHeader() {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = localStorage.getItem('access_token');
  const isLoggedIn = !!token;
  if (isLoggedIn) {
      return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      };
  } else {
      return {};
  }
}
