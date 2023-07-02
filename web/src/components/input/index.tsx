import StyledInput from "./style";

interface iInputProps {
  register: any;
  title: string;
  placeholder: string;
  idValue: string;
  type: string;
  pattern?: string;
  value?: string
}

const Input = ({
  register,
  title,
  placeholder,
  type,
  idValue,
  pattern,
  value
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
        value={ value && value}
      />
    </StyledInput>
  );
};

export default Input;
