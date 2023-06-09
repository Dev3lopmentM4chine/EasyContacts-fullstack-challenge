import StyledInput from "./style";

interface iInputProps {
  register: any;
  title: string;
  placeholder: string;
  idValue: string;
  type: string;
  pattern?: string;
}

const Input = ({
  register,
  title,
  placeholder,
  type,
  idValue,
  pattern,
}: iInputProps) => {
  return (
    <StyledInput>
      <label htmlFor="email">{title}</label>
      <input
        id={idValue}
        type={type}
        placeholder={placeholder}
        {...register(idValue)}
        pattern={ pattern ? pattern : null}
      />
    </StyledInput>
  );
};

export default Input;
