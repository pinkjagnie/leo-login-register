"use client";

import { Form, Formik } from "formik";

import { registerSchema } from "@/schemas/index";

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
        <Form className="form-control w-[90%] md:w-[60%] lg:w-[50%] p-6 mx-auto mt-2 mb-14 border-2 border-stone-200 rounded-md bg-stone-200">
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
              className="btn btn-outline bg-zinc-400 w-[80%] mx-auto block"
            >
              Create an account
            </button>
          ) : (
            <button className="btn btn-active btn-accent text-slate-50 w-[80%] mx-auto block">
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
