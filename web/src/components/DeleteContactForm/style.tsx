import { styled } from "styled-components";

const StyledDeleteContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: var(--font-size-7);
    color: var(--color-secondary);
  }
  button {
    color: var(--color-secondary);
  }
`;

export default StyledDeleteContactForm;
