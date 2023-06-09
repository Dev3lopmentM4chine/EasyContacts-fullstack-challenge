import StyledButton from "./style";

interface iButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}

const Button = ({ text, type, onClick }: iButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} >
      {text}
    </StyledButton>
  );
};

export default Button;
