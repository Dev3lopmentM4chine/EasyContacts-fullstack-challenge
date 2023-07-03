import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  iUpdateContact,
  tContact,
  tContactReturn,
} from "../../context/auth/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contact.schemas";
import Input from "../Input";
import Button from "../Button";
import { AuthContext } from "../../context/auth";
import StyledUpdateContactForm from "./style";

interface iModalContactProps {
  contact: tContactReturn;
  onClose: () => void;
}

const UpdateContactForm = ({ contact, onClose }: iModalContactProps) => {
  const { updateContact } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tContact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: contact.fullName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
    },
  });

  const submit: SubmitHandler<tContact> = (formData) => {
    if (formData.email === contact.email) {
      const newFormData: iUpdateContact = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
      };

      updateContact(newFormData, contact.id);
      onClose();
    }

    updateContact(formData, contact.id);
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
          <Button type="submit" text="Update contact" />
        </div>
      </StyledUpdateContactForm>
    </>
  );
};

export default UpdateContactForm;
