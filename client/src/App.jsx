import { Box, Toolbar } from "@mui/material";
import TitleBarComponent from "./components/TitleBarComponent";
import CardComponent from "./components/CardComponent";
import "./App.css";

function App() {
  return (
    <>
      <TitleBarComponent />
      <Toolbar />
      <Box>
        <CardComponent />
        <CardComponent />
      </Box>
    </>
  );
}

export default App;
