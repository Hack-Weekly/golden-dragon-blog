import { useAuth } from "../services/auth";
import { Navigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  if (!auth.checkAuth()) {
    return <Navigate to="/login"/>;
  }
  return (
    <>
      <h1>Profile Page</h1>
    </>
  );
}

export default Profile;
