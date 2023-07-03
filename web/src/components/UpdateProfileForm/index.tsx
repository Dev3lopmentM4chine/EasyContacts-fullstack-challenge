import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  iUpdateContact,
  iUpdateUser,
  tUserReturn,
} from "../../context/auth/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import Button from "../Button";
import { AuthContext } from "../../context/auth";
import StyledUpdateContactForm from "./style";
import { updateUserSchema, userSchema } from "../../schemas/user.schemas";

interface iModalContactProps {
  user: tUserReturn;
  onClose: () => void;
}

const UpdateProfileForm = ({ user, onClose }: iModalContactProps) => {
  const { updateProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateUser>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });

  const submit: SubmitHandler<iUpdateUser> = (formData) => {
    if (formData.email === user.email) {
      const newFormData: iUpdateContact = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
      };

      updateProfile(newFormData, user.id);
      onClose();
    }

    updateProfile(formData, user.id);
    onClose();
  };

  return (
    <>
      <StyledUpdateContactForm onSubmit={handleSubmit(submit)}>
        <div className="containerInput">
          <div>
            <Input
              register={register}
              idValue="fullName"
              placeholder="ex: Lucas da Silva"
              title="Full Name"
              type="text"
            />
            {errors.fullName ? (
              <p className="errorMessage">{errors.fullName.message}</p>
            ) : null}
          </div>

          <div>
            <Input
              register={register}
              idValue="email"
              placeholder="ex: example@gmail.com"
              title="Email"
              type="email"
            />
            {errors.email ? (
              <p className="errorMessage">{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <Input
              register={register}
              idValue="phoneNumber"
              placeholder="ex: (xx)-xxxx-xxxx"
              title="Phone Number"
              type="tel"
            />
            {errors.phoneNumber ? (
              <p className="errorMessage">{errors.phoneNumber.message}</p>
            ) : null}
          </div>
        </div>

        <div className="containerButton">
          <Button type="button" text="Cancel" onClick={onClose} />
          <Button type="submit" text="Update profile" />
        </div>
      </StyledUpdateContactForm>
    </>
  );
};

export default UpdateProfileForm;
