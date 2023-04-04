import { Box, Toolbar } from "@mui/material";
import TitleBarComponent from "./components/TitleBarComponent";
import CardComponent from "./components/CardComponent";
import Dashboard from "./routes/Dashboard";
import BlogList from "./routes/BlogList";
import Profile from "./routes/Profile";
import { Route, Routes, Outlet } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LayoutsWithNavbar />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/blogs" element={<BlogList />}/>
        <Route path="/profile" element={<Profile />}/>
      </Route>
      </Routes>
    </>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      <TitleBarComponent />
      <div className="page-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
