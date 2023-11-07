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

      window.scrollTo(0, 0); // automatic scroll to top of the page

      router.push("/");
    } catch (error) {
      console.log(error.data.message);

      window.scrollTo(0, 0); // automatic scroll to top of the page

      setErrorMsg("Something went wrong. " + error.data.message);

      // clearing the error message
      const timeout = setTimeout(() => {
        setErrorMsg("");
        clearTimeout(timeout);
      }, 3000);
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
