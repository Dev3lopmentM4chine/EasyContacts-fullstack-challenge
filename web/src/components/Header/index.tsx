import { useContext } from "react";
import Logo from "../Logo";
import StyledHeader from "./style";
import { UserContext } from "../../context/user";

const Header = () => {
  const { logout } = useContext(UserContext);

  return (
    <StyledHeader>
      <Logo />
      <button onClick={logout}>Logout</button>
    </StyledHeader>
  );
};

export default Header;
