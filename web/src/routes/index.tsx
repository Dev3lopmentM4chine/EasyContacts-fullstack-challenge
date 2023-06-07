import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
import Home from "../pages/home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesMain;
