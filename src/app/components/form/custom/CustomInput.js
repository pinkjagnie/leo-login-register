import { useField } from "formik";

const CustomInput = ({ info, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-6">
      <label className="label">{label}</label>
      <input
        {...field}
        {...props}
        className={`input input-bordered w-full bg-stone-100 ${
          meta.error && meta.touched ? "border-rose-500" : "border-gray-900"
        }`}
      />
      {info && <p className="w-[95%] mx-auto pt-2 text-xs italic">{info}</p>}
      {meta.error && meta.touched && (
        <p className="pt-2 text-sm text-rose-600">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomInput;
