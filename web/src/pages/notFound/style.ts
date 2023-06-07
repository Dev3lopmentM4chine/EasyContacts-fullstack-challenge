import { styled } from "styled-components";

const StyledNotFound = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-gray-100);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: var(--font-size-7);
    color: var(--color-primary);
  }
`;

export default StyledNotFound;
