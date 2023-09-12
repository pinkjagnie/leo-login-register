"use client";

import { Form, Formik } from "formik";

import { schema } from "@/schemas/index";

import CustomInput from "./CustomInput";
import CustomPasswordInput from "./CustomPasswordInput";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(values);
  actions.resetForm();
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
