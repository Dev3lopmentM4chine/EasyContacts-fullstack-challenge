import { styled } from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-gray-60);

  .noContacts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .noContacts p {
    font-size: var(--font-size-4);
    color: var(--color-black);
  }
  .noContacts span {
    font-size: var(--font-size-4);
    color: var(--color-primary);
    cursor: pointer;
    transition: ease 0.5s;
  }
  .noContacts span:hover {
    opacity: 0.5;
    transition: ease 0.5s;
  }
`;

export default StyledHome;
