import { styled } from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: +9999;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  overflow: auto;

  .modal {
    background-color: var(--color-gray-60);

    width: 100%;
    max-width: 32.5rem;
    height: fit-content;
    padding: 1rem 1.5rem;
    margin: 10px;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .modal-closeModalContainer {
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .modal-closeModalContainer p {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-1);
    color: var(--color-gray-100);
  }
  .modal-closeModalContainer button {
    font-size: var(--font-size-5);
    color: var(--color-gray-100);
    font-weight: var(--font-weight-1);
    transition: all.5s;
  }
  .modal-closeModalContainer button:hover {
    color: var(--color-gray-60);
    transition: all.5s;
  }
  .modal-content {
    display: flex;
    justify-content: center;
  }
`;

export default StyledModal;
