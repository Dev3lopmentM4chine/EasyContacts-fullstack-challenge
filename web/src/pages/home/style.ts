import { styled } from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-60);

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
  }

  .content .profile {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .content .profile .profilePhoto {
    width: 120px;
    height: 120px;
    background-color: var(--color-black);
    border-radius: 50%;
    border: 2px solid var(--color-gray-100);
    transition: all.5s;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .content .profile .profilePhoto svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--color-gray-60);
    color: var(--color-primary);
  }
  .content .profile .profileFullName,
  .profileEmail,
  .profilePhoneNumber {
    font-size: var(--font-size-5);
    color: var(--color-primary);
    font-weight: var(--font-weight-1);
  }
  .content .profile .profileEmail,
  .profilePhoneNumber {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
  .content .profile .profileButtons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    align-items: center;
  }
  .content .profile .profileButtons .buttonDelete {
    color: var(--color-secondary);
  }
  
  .content .cards .cards-painel {
    height: 3.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content .cards .cards-painel h3 {
    font-size: var(--font-size-4);
    color: var(--color-black);
    font-weight: var(--font-weight-1);
  }
  .content .cards .cards-painel button {
    color: var(--color-primary);
    width: 30px;
    height: 30px;
  }
  .content .cards .cards-painel button svg {
    width: 100%;
    height: 100%;
  }
  .content .cards ul {
    display: flex;
    flex-direction: row;
    overflow: auto;
    width: 100%;
    gap: 15px;
  }

  .noContacts {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .noContacts p {
    font-size: var(--font-size-4);
    color: var(--color-black);
    font-weight: var(--font-weight-1);
  }
  .noContacts span {
    font-weight: var(--font-weight-1);
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
    height: 82.5vh;

    .content {
      flex-direction: row;
      height: 85.9%;
    }
    .content .profile {
      width: 100%;
      max-width: 31.25rem;
    }
    .content .cards {
      width: 700px;
      margin-right: 20px;
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
