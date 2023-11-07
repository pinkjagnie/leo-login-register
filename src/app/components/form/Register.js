"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import { generateRandomId } from "@/utils/generateRandomUserID";

import RegisterForm from "./RegisterForm";
import Message from "./Message";

const Register = () => {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const { register } = useAuth();

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
    const enteredConfirmPass = values.confirmPassword;

    const randomUserId = generateRandomId(8);

    try {
      await register(
        enteredEmail,
        enteredPass,
        enteredConfirmPass,
        randomUserId
      );

      actions.resetForm();

      window.scrollTo(0, 0); // automatic scroll to top of the page

      setMessage(
        "User successfully created! You can now login to your account"
      );

      const timeout = setTimeout(() => {
        router.push("/login");
        clearTimeout(timeout);
      }, 2000);
    } catch (error) {
      console.log(error);

      window.scrollTo(0, 0); // automatic scroll to top of the page

      setErrorMsg("Something went wrong! " + error.data.message);

      // clearing the error message
      const timeout = setTimeout(() => {
        setErrorMsg("");
        clearTimeout(timeout);
      }, 3000);
    }
  };

  return (
    <>
      {(message || errorMsg) && (
        <Message message={message} errorMsg={errorMsg} />
      )}
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};

export default Register;
