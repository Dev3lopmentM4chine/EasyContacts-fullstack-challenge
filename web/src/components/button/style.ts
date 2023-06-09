import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  max-width: 25rem;
  height: 3.4375rem;
  
  color: var(--color-primary);
  background-color: var(--color-black);
  border: 2px solid var(--color-black);
  font-size: var(--font-size-2);
  border-radius: var(--radius-3);
  transition: ease .5s;

  &:hover {
    opacity: 0.7;
  }
`;

export default StyledButton;
