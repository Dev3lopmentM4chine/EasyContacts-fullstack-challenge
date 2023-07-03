import { useContext } from "react";
import Button from "../Button";
import { AuthContext } from "../../context/auth";
import StyledDeleteProfileForm from "./style";

interface iDeleteContactForm {
  id: string;
  onClose: () => void;
}

const DeleteProfileForm = ({ id, onClose }: iDeleteContactForm) => {
  const { deleteProfile } = useContext(AuthContext);

  return (
    <>
      <StyledDeleteProfileForm>
        <h1>Do you really want to delete your account?</h1>
        <Button
          type="button"
          text="Delete profile"
          onClick={() => {
            deleteProfile(id);
            onClose();
          }}
        />
      </StyledDeleteProfileForm>
    </>
  );
};

export default DeleteProfileForm;
