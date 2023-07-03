import { useContext } from "react";
import Button from "../Button";
import { AuthContext } from "../../context/auth";
import StyledDeleteContactForm from "./style";

interface iDeleteContactForm {
  id: string;
  onClose: () => void;
}

const DeleteContactForm = ({ id, onClose }: iDeleteContactForm) => {
  const { deleteContact } = useContext(AuthContext);

  return (
    <>
      <StyledDeleteContactForm>
        <h1>Do you really want to delete this contact?</h1>
        <Button
          type="button"
          text="Delete Contact"
          onClick={() => {
            deleteContact(id);
            onClose();
          }}
        />
      </StyledDeleteContactForm>
    </>
  );
};

export default DeleteContactForm;
