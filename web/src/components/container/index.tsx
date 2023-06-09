import StyledContainer from "./style";
import { ReactNode } from "react";

interface iContainerProps {
  children: ReactNode;
}

const Container = ({ children }: iContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
