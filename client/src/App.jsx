import { Box, Toolbar } from "@mui/material";
import TitleBarComponent from "./components/TitleBarComponent";
import Dashboard from "./routes/Dashboard";
import BlogList from "./routes/BlogList";
import Profile from "./routes/Profile";
import LoginPage from "./routes/LoginPage";
import NotificationProvider from "./notifications/NotificationProvider";


import { Route, Routes, Outlet } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LayoutsWithNavbar />}>
        <Route routeType={'public'} path="/" element={<Dashboard />}/>
        <Route path="/blogs" element={<BlogList />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Route>
      </Routes>
    </>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      <NotificationProvider>
        <TitleBarComponent />
        <div className="page-container">
          <Outlet />
        </div>
      </NotificationProvider>
    </>
  );
}

export default App;
