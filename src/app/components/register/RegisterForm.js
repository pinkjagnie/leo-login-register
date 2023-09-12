"use client";
import { useState } from "react";
import { useFormik } from "formik";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { schema } from "../../../schemas/index";

const onSubmit = (values, actions) => {
  console.log(values);

  actions.resetForm();
};

const RegisterForm = () => {
  // visibility of password
  const [passwordType, setPasswordType] = useState("password");

  const toggleShowPassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  let eyeIcon =
    passwordType === "password" ? (
      <AiOutlineEyeInvisible size={20} />
    ) : (
      <AiOutlineEye size={20} />
    );
  // end of stuff about visibility of password

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTOS: false,
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <form
      className="form-control w-[90%] md:w-[60%] p-6 mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="pb-6">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`input-ghost w-[100%] bg-slate-50 border-b ${
            errors.email && touched.email
              ? "border-rose-500"
              : "border-gray-900"
          }`}
        />
        {errors.email && touched.email && (
          <p className="pt-2 text-sm text-rose-600">{errors.email}</p>
        )}
      </div>
      <div className="pb-6">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="flex">
          <input
            type={passwordType}
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input-ghost w-[100%] bg-slate-50 border-b ${
              errors.password && touched.password
                ? "border-rose-500"
                : "border-gray-900"
            }`}
          />
          <span
            className="-ml-8 my-auto cursor-pointer"
            onClick={toggleShowPassword}
          >
            {eyeIcon}
          </span>
        </div>
        <p className="w-[95%] mx-auto pt-2 text-xs italic">
          Password must be at least 8 characters long, contain one capital
          letter, one number and one special character
        </p>
        {errors.password && touched.password && (
          <p className="pt-2 text-sm text-rose-600">{errors.password}</p>
        )}
      </div>
      <div className="pb-6">
        <label htmlFor="confirmPassword" className="label">
          Confirm password
        </label>
        <div className="flex">
          <input
            type={passwordType}
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input-ghost w-[100%] bg-slate-50 border-b ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-rose-500"
                : "border-gray-900"
            }`}
          />
          <span
            className="-ml-8 my-auto cursor-pointer"
            onClick={toggleShowPassword}
          >
            {eyeIcon}
          </span>
        </div>
        <p className="w-[95%] mx-auto pt-2 text-xs italic">
          Password must be at least 8 characters long, contain one capital
          letter, one number and one special character
        </p>
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="pt-2 text-sm text-rose-600">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="pb-6 flex items-center justify-start">
        <input
          type="checkbox"
          id="acceptedTOS"
          name="accteptedTOS"
          value={values.acceptedTOS}
          className="checkbox"
        />
        <label htmlFor="acceptedTOS" className="label-text cursor-pointer pl-2">
          I accept the terms of service
        </label>
      </div>
      {errors.acceptedTOS && touched.acceptedTOS && (
        <p className="-mt-4 pb-6 text-sm text-rose-600">{errors.acceptedTOS}</p>
      )}
      {!isSubmitting ? (
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-outline"
        >
          Create an account
        </button>
      ) : (
        <button className="btn">
          <span className="loading loading-spinner"></span>
          Submitting
        </button>
      )}
    </form>
  );
};

export default RegisterForm;
