import { styled } from "styled-components";

const StyledLogin = styled.main`
  width: 100%;
  height: 100%;
  display: flex;

  .formLogin {
    width: 100%;
    height: 100%;
    padding: 0.625rem;
    background-color: var(--color-gray-60);

    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
  }

  .formLogin .logo {
    width: 100%;

    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .signupLink {
    color: var(--color-black);
    font-size: var(--font-size-3);
  }
  .signupLink a {
    font-size: var(--font-size-3);
    color: var(--color-primary);
    text-decoration: none;
  }

  .formLogin .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .formLogin .title h1 {
    color: var(--color-black);
    font-size: var(--font-size-8);
  }
  .formLogin .title p {
    color: var(--color-primary);
    font-size: var(--font-size-3);
  }

  .formLogin form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .formLogin .containerInput {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .formLogin .containerInput > div {
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
    .formLogin {
      width: 50%;
    }
    .formLogin .logo {
      display: flex;
    }
    .formLogin .title h1 {
      font-size: var(--font-size-10);
    }
    .signupContainer {
      display: none;
    }

    .illustration {
      display: inline-block;
    }
  }
`;

export default StyledLogin;
