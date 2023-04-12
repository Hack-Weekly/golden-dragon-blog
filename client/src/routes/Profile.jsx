import ProfileCard from "../components/ProfileCard";
import CardComponent from "../components/CardComponent";
import { Box, Card, Typography } from "@mui/material";
import DogImg from "../assets/dog.png";
import { useAuth } from "../services/auth";
import { Navigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  if (!auth.checkAuth()) {
    return <Navigate to="/login"/>;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "3rem", mb: "2rem" }}>
          Profile
        </Typography>
        <ProfileCard
          avatar={DogImg}
          name="Bob Bob"
          bio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium corporis ducimus impedit quae!"
          postsCount="5"
          creationDate="Jan 01, 2001"
        />
        <Box sx={{ mt: "2rem" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "2.5rem", textAlign: "center" }}
          >
            Posts
          </Typography>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
      </Box>
    </>
  );
}

export default Profile;
