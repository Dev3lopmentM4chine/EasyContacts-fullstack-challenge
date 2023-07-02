import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import { AuthProvider } from "../context/auth";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <AuthProvider>
            <Home />
          </AuthProvider>
        }
      />
    </Routes>
  );
};

export default RoutesMain;
