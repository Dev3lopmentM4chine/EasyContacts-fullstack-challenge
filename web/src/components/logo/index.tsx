import StyledLogo from "./style";
import logoImage from "../../assets/favicon_dark.ico";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logoImage} alt="Logo" />
      <p>EasyContacts</p>
    </StyledLogo>
  );
};

export default Logo;
