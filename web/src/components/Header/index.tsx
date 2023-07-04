import { useContext } from "react";
import Logo from "../Logo";
import StyledHeader from "./style";
import { UserContext } from "../../context/user";
import { MdExitToApp } from "react-icons/md";

const Header = () => {
  const { logout } = useContext(UserContext);

  return (
    <StyledHeader>
      <Logo />
      <button onClick={logout}>
        <MdExitToApp />
      </button>
    </StyledHeader>
  );
};

export default Header;
