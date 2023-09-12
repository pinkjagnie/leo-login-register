import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-6">
      <label className="label">{label}</label>
      <input
        {...field}
        {...props}
        className={`input-ghost w-[100%] bg-slate-50 border-b ${
          meta.error && meta.touched ? "border-rose-500" : "border-gray-900"
        }`}
      />
      {meta.error && meta.touched && (
        <p className="pt-2 text-sm text-rose-600">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomInput;
