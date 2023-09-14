import { useState } from "react";
import { useField } from "formik";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const CustomPasswordInput = ({ info, label, ...props }) => {
  const [field, meta] = useField(props);

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
    <div className="pb-6">
      <label className="label">{label}</label>
      <div className="flex">
        <input
          {...field}
          {...props}
          type={passwordType}
          className={`input input-bordered w-full bg-stone-100 ${
            meta.error && meta.touched ? "border-rose-500" : "border-gray-900"
          }`}
        />
        <span
          className="-ml-8 my-auto cursor-pointer"
          onClick={toggleShowPassword}
        >
          {eyeIcon}
        </span>
      </div>
      {info && <p className="w-[95%] mx-auto pt-2 text-xs italic">{info}</p>}
      {meta.error && meta.touched && (
        <p className="pt-2 text-sm text-rose-600">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomPasswordInput;
