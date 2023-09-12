"use client";

import { Form, Formik } from "formik";

import { schema } from "@/schemas/index";
import pb from "@/lib/pocketbase";
// import { createUser } from "@/actions/index";

import CustomInput from "./CustomInput";
import CustomPasswordInput from "./CustomPasswordInput";
import CustomCheckbox from "./CustomCheckbox";

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
  } catch (error) {
    console.log(error);
  }
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTOS: false,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-control w-[90%] md:w-[60%] p-6 mx-auto">
          <CustomInput label="Email" name="email" type="email" />
          <CustomPasswordInput label="Password" name="password" />
          <CustomPasswordInput
            label="Confirm password"
            name="confirmPassword"
          />
          <CustomCheckbox
            type="checkbox"
            name="acceptedTOS"
            label="I accept the terms of service"
          />
          {!isSubmitting ? (
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-outline"
            >
              Create an account
            </button>
          ) : (
            <button className="btn btn-active btn-accent text-slate-50">
              <span className="loading loading-spinner text-slate-50"></span>
              Submitting
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
