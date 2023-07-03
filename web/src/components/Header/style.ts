import { styled } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 7.25rem;
  border-bottom: 2px solid var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;

  button {
    width: 150px;
    height: 45px;
    border-radius: var(--radius-2);
    font-size: var(--font-size-4);
    color: var(--color-black);
    font-weight: var(--font-weight-1);
  }
  button:hover {
    font-weight: var(--font-weight-2);
    color: var(--color-secondary);
  }
`;

export default StyledHeader;
