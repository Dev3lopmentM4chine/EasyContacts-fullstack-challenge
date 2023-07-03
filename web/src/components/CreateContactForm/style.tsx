import { styled } from "styled-components";

const StyledCreateContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .containerInput,
  .containerButton {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }
  .containerButton {
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (min-width: 800px) {
    .containerButton {
      flex-direction: row;
      gap: 5px;
    }
  }
`;

export default StyledCreateContactForm;
