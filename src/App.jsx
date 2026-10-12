import { Route, BrowserRouter, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Profile from "./views/Profile.jsx";
import Single from "./views/Single.jsx";
import Upload from "./views/Upload.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout";
import { UserProvider } from "./contexts/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/single" element={<Single />} />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
