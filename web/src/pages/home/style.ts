import { styled } from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-gray-60);

  .content {
    width: 100%;
    height: 85.9%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content .profile {
    background-color: red;
    width: 100%;
    height: 100%;
  }
  .content .cards .cards-painel {
    height: 3.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content .cards ul {
    display: flex;
    flex-direction: row;
    overflow: auto;
    width: 100%;
    gap: 15px;
  }

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

  @media screen and (min-width: 800px) {
    .content {
      flex-direction: row;
    }
    .content .profile {
      background-color: red;
      width: 100%;
      max-width: 31.25rem;
    }
    .content .cards ul {
      flex-direction: column;
      max-width: 800px;
      height: 100%;
      max-height: 91.5%;
    }
  }
`;

export default StyledHome;
