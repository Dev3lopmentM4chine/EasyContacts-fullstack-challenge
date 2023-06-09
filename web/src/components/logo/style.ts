import { styled } from "styled-components";

const StyledLogo = styled.div`
  width: 9.375rem;
  height: 2.625rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 1.875rem;
    height: 1.875rem;
  }

  p {
    color: var(--color-gray-black);
    font-size: var(--font-size-3);
  }
`;

export default StyledLogo;
