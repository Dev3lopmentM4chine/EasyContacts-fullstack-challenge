import { useNavigate } from "react-router-dom";
import StyledHome from "./style";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const isAthenticated = localStorage.getItem("@EasyContactsToken");
  
  useEffect(() => {
    if (!isAthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <StyledHome>
      <h1>Home Page</h1>
    </StyledHome>
  );
};

export default Home;
