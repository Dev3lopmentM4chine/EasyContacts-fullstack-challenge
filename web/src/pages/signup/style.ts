import { styled } from "styled-components";

const StyledSignup = styled.main`
  width: 100%;
  height: 100%;
  display: flex;

  .formSignup {
    width: 100%;
    height: 100%;
    padding: 0.625rem;
    background-color: var(--color-gray-60);
    overflow: auto;

    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
  }
  .formSignup .logo {
    width: 100%;

    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .signinLink {
    color: var(--color-black);
    font-size: var(--font-size-3);
  }
  .signinLink a {
    font-size: var(--font-size-3);
    color: var(--color-primary);
    text-decoration: none;
  }

  .formSignup .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .formSignup .title h1 {
    color: var(--color-black);
    font-size: var(--font-size-8);
  }
  .formSignup .title p {
    color: var(--color-primary);
    font-size: var(--font-size-3);
  }

  .formSignup form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .formSignup .containerInput {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .formSignup .containerInput > div {
    height: 106px;
  }

  .illustration {
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-color: var(--color-primary);

    display: none;
  }
  .illustration img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }

  @media screen and (min-width: 800px) {
    .formSignup {
      width: 50%;
    }
    .formSignup .logo {
      display: flex;
    }
    .formSignup .title h1 {
      font-size: var(--font-size-10);
    }
    .signinContainer {
      display: none;
    }

    .illustration {
      display: inline-block;
    }
  }
`;

export default StyledSignup;
