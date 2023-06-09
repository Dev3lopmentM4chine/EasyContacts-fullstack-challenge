import { useContext } from "react";
import { tUser } from "../../context/user/interfaces";
import StyledSignup from "./style";
import { UserContext } from "../../context/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/user.schemas";
import Container from "../../components/container";
import backgroundImage from "../../assets/bg.svg";
import Logo from "../../components/logo";
import Button from "../../components/button";
import Input from "../../components/input";

const Signup = () => {
  const { signup } = useContext(UserContext);

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
      <StyledSignup>
        <section className="formSignup">
          <div className="logo">
            <Logo />
            <p className="signinLink">
              have an account? <a href="/login">Sign in!</a>
            </p>
          </div>

          <div className="title">
            <h1>Get Started With EasyContacts</h1>
            <p>Getting started is easy</p>
          </div>

          <form onSubmit={handleSubmit(submit)}>
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
                  idValue="password"
                  placeholder="ex: frangoComCebola123"
                  title="Password"
                  type="password"
                />
                {errors.password ? (
                  <p className="errorMessage">{errors.password.message}</p>
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
                />
                {errors.phoneNumber ? (
                  <p className="errorMessage">{errors.phoneNumber.message}</p>
                ) : null}
              </div>
            </div>

            <div className="signinContainer">
              <p className="signinLink">
                have an account? <a href="/login">Sign in!</a>
              </p>
            </div>

            <Button type="submit" text="Create Account" />
          </form>
        </section>

        <section className="illustration">
          <img src={backgroundImage} alt="" />
        </section>
      </StyledSignup>
    </Container>
  );
};

export default Signup;
