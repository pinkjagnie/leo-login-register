"use client";

import { useState } from "react";

import useLogin from "@/hooks/useLogin";

import LoginForm from "./LoginForm";
import Message from "./Message";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const login = useLogin();

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;

    try {
      await login(enteredEmail, enteredPass, actions);
    } catch (error) {
      console.log(error.data.message);
      setErrorMsg("Something went wrong. " + error.data.message);
    }
  };

  return (
    <>
      {errorMsg && <Message errorMsg={errorMsg} />}
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
