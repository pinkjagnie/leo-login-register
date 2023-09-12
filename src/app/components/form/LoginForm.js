"use client";

import { Form, Formik } from "formik";

import { loginSchema } from "@/schemas/index";
import useLogin from "@/hooks/useLogin";
// import { createUser } from "@/actions/index";

import CustomInput from "./custom/CustomInput";
import CustomPasswordInput from "./custom/CustomPasswordInput";

const LoginForm = () => {
  const login = useLogin();

  const onSubmit = (values, actions) => {
    console.log(values);

    const enteredEmail = values.email;
    const enteredPass = values.password;

    login(enteredEmail, enteredPass, actions);
  };

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
        <Form className="form-control w-[90%] md:w-[60%] p-6 mx-auto">
          <CustomInput label="Email" name="email" type="email" />
          <CustomPasswordInput label="Password" name="password" />
          {!isSubmitting ? (
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-outline"
            >
              Login
            </button>
          ) : (
            <button className="btn btn-active btn-accent text-slate-50">
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
