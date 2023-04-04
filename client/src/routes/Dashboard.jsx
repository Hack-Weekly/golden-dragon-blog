import { Box } from "@mui/material";
import CardComponent from "../components/CardComponent";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Box>
        <CardComponent />
        <CardComponent />
      </Box>
    </>
  );
}

export default Dashboard;
