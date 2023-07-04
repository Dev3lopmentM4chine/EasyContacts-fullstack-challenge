import { styled } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 7.25rem;
  background-color: var(--color-gray-60);
  border-bottom: 2px solid var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;

  button {
    width: 35px;
    height: 35px;
    border-radius: var(--radius-2);
    font-size: var(--font-size-4);
    color: var(--color-black);
    font-weight: var(--font-weight-1);
  }
  button:hover {
    font-weight: var(--font-weight-2);
    color: var(--color-secondary);
  }
  button svg{
    width: 100%;
    height: 100%;
  }
`;

export default StyledHeader;
