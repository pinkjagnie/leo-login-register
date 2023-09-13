"use client";

import { useState } from "react";

import pb from "@/lib/pocketbase";

import RegisterForm from "./RegisterForm";
import Message from "./Message";

const Register = () => {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;
    const enteredConfirmPass = values.confirmPassword;

    const data = {
      email: enteredEmail,
      password: enteredPass,
      passwordConfirm: enteredConfirmPass,
    };

    try {
      const record = await pb.collection("users").create(data);

      console.log("record ", record);
      actions.resetForm();

      setMessage(
        "User successfully created! You can now login to your account"
      );
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong! " + error.data.message);
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
