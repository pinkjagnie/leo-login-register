"use client";
import { useState } from "react";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

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

  return (
    <form className="form-control w-[90%] md:w-[60%] p-6 mx-auto">
      <div className="pb-6">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input-ghost w-[100%] bg-slate-50 border-b border-gray-900"
        />
      </div>
      <div className="pb-6">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="flex">
          <input
            type={passwordType}
            id="password"
            className="input-ghost w-[100%] bg-slate-50 border-b border-gray-900"
          />
          <span
            className="-ml-8 my-auto cursor-pointer"
            onClick={toggleShowPassword}
          >
            {eyeIcon}
          </span>
        </div>
      </div>
      <div className="pb-6 flex items-center justify-start">
        <input type="checkbox" id="selectCheckbox" className="checkbox" />
        <label
          htmlFor="selectCheckbox"
          className="label-text cursor-pointer pl-2"
        >
          I accept the terms of service
        </label>
      </div>
    </form>
  );
};

export default RegisterForm;
