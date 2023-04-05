export async function userAuth() {
  const [isAuth, setIsAuth] = useState(false);
  if (localStorage.getItem('access_token') !== null) {
    setIsAuth(true);
  }
  return isAuth.current;
}
