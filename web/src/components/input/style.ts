import { styled } from "styled-components";

const StyledInput = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 5.3125rem;

  display: flex;
  flex-direction: column;
  justify-content: start;

  label {
    color: var(--color-black);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-1);
  }
  input {
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    background-color: var(--color-black);
    border-radius: var(--radius-3);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }
  input::placeholder {
    color: var(--color-gray-60);
  }
  input:focus:invalid {
    border-color: red;
  }
`;

export default StyledInput;
