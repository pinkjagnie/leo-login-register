"use client";

import { Form, Formik } from "formik";

import { loginSchema } from "@/schemas/index";

import CustomInput from "./custom/CustomInput";
import CustomPasswordInput from "./custom/CustomPasswordInput";

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-control w-[90%] md:w-[60%] lg:w-[50%] p-6 mx-auto mt-2 mb-14 border-2 border-stone-200 rounded-md bg-stone-200">
          <CustomInput label="Email" name="email" type="email" />
          <CustomPasswordInput label="Password" name="password" />
          {!isSubmitting ? (
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-outline bg-zinc-400 w-[80%] mx-auto block"
            >
              Login
            </button>
          ) : (
            <button className="btn btn-active btn-accent text-slate-50 w-[80%] mx-auto block">
              <span className="loading loading-spinner text-slate-50"></span>
              Please wait
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
