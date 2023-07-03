import { styled } from "styled-components";

const StyledCardContact = styled.div`
  min-width: 15.625rem;
  height: 21.875rem;
  background-color: var(--color-black);
  transition: all.5s;
  cursor: pointer;
  border: 2px solid;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  border-radius: var(--radius-3);

  .profileImage {
    width: 120px;
    height: 120px;
    background-color: var(--color-black);
    border-radius: 50%;
    border: 2px solid var(--color-gray-60);
    transition: all.5s;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .profileImage svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--color-gray-60);
    color: var(--color-primary);
  }

  .fullName,
  .email {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .fullName {
    color: var(--color-gray-60);
    font-size: var(--font-size-5);
  }

  .email {
    display: flex;
    align-items: center;
    gap: 3px;
    transition: all.5s;
    color: var(--color-gray-60);
    font-size: var(--font-size-3);
  }

  .phoneNumber {
    display: flex;
    align-items: center;
    gap: 2px;
    transition: all.5s;
    color: var(--color-gray-60);
  }

  .menu {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
  .menu button > svg {
    color: red;
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 50rem) {
    height: 116px;
    flex-direction: row;
    justify-content: start;
    gap: 10px;

    .profileImage {
      width: 90px;
      height: 90px;
    }
    .menu {
      justify-content: space-between;
      width: 80px;
    }
    .menu button svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export default StyledCardContact;
