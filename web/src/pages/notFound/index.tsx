import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import StyledNotFound from "./style";

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <StyledNotFound>
      <h1>404 Page Not Found</h1>
      <Button type="button" text="Home page" onClick={() => navigate("/home")}/>
    </StyledNotFound>
  );
};

export default NotFound;
