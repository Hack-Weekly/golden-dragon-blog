import { Box, Toolbar } from "@mui/material";
import TitleBarComponent from "./components/TitleBarComponent";
import Dashboard from "./routes/Dashboard";
import BlogList from "./routes/BlogList";
import Profile from "./routes/Profile";
import LoginPage from "./routes/LoginPage";
import LogoutPage from "./routes/LogoutPage";
import NotificationProvider from "./notifications/NotificationProvider";
import { ProvideAuth } from "./services/auth";


import { Route, Routes, Outlet } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <ProvideAuth>
        <Routes>
          <Route path="/" element={<LayoutsWithNavbar />}>
            <Route routeType={'public'} path="/" element={<Dashboard />}/>
            <Route path="/blogs" element={<BlogList />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
          </Route>
        </Routes>
      </ProvideAuth>
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
