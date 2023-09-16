"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import LoginForm from "./LoginForm";
import Message from "./Message";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const { login } = useAuth();

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;

    try {
      await login(enteredEmail, enteredPass);

      actions.resetForm();

      router.push("/");
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
