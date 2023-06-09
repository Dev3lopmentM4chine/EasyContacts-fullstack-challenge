import { useContext } from "react";
import { tUser } from "../../context/user/interfaces";
import StyledRegister from "./style";
import { UserContext } from "../../context/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/user.schemas";
import Container from "../../components/container";


const Register = () => {
  const { register:signup } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<tUser>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });

  const submit = (formData: tUser) => {
    signup(formData);
    reset();
  };

  return (
    <Container>
      <StyledRegister>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="ex: Lucas da Silva"
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="errorMessage">{errors.fullName.message}</p>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="errorMessage">{errors.email.message}</p>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="ex: coxinha123"
            {...register("password")}
          />
          {errors.password ? (
            <p className="errorMessage">{errors.password.message}</p>
          ) : null}

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            placeholder="(xx)-xxxx-xxxx"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber ? (
            <p className="errorMessage">{errors.phoneNumber.message}</p>
          ) : null}

          <button type="submit">Login</button>
        </form>
      </StyledRegister>
    </Container>
  );
};

export default Register;
