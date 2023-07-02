import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { tContact } from "../../context/auth/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contact.schemas";
import Input from "../Input";
import Button from "../Button";
import { AuthContext } from "../../context/auth";
import StyledUpdateContactForm from "./style";

interface iModalContactProps {
  contactData: tContact;
  id: string;
}

const UpdateContactForm = ({ contactData, id }: iModalContactProps) => {
  const { updateContact } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tContact>({
    resolver: zodResolver(contactSchema),
  });

  const submit: SubmitHandler<tContact> = (formData) => {
    updateContact(formData, id);
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
              value={contactData.fullName}
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
              value={contactData.email}
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
              pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
              value={contactData.phoneNumber}
            />
            {errors.phoneNumber ? (
              <p className="errorMessage">{errors.phoneNumber.message}</p>
            ) : null}
          </div>
        </div>

        <Button type="submit" text="Update contact" />
      </StyledUpdateContactForm>
    </>
  );
};

export default UpdateContactForm;
