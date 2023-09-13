"use client";

import { Form, Formik } from "formik";

import { registerSchema } from "@/schemas/index";
// import { createUser } from "@/actions/index";

import CustomInput from "./custom/CustomInput";
import CustomPasswordInput from "./custom/CustomPasswordInput";
import CustomCheckbox from "./custom/CustomCheckbox";

const RegisterForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTOS: false,
      }}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-control w-[90%] md:w-[60%] p-6 mx-auto">
          <CustomInput label="Email" name="email" type="email" />
          <CustomPasswordInput
            label="Password"
            name="password"
            info="Password must be at least 8 characters long, contain one capital letter,
        one number and one special character"
          />
          <CustomPasswordInput
            label="Confirm password"
            name="confirmPassword"
            info="Password must be at least 8 characters long, contain one capital letter,
            one number and one special character"
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
