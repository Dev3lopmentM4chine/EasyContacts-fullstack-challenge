import StyledInput from "./style";

interface iInputProps {
  register: any;
  errors: any;
  title: string;
  placeholder: string;
  idValue: string;
  type: string;
}

const Input = ({
  register,
  errors,
  title,
  placeholder,
  type,
  idValue,
}: iInputProps) => {
  return (
    <StyledInput>
      <label htmlFor="email">{title}</label>
      <input
        id={idValue}
        type={type}
        placeholder={placeholder}
        {...register(idValue)}
      />
    </StyledInput>
  );
};

export default Input;
