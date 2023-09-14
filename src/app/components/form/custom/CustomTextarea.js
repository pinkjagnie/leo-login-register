import { useField } from "formik";

const CustomTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-6">
      <label className="label">{label}</label>
      <textarea
        {...field}
        {...props}
        className={`textarea textarea-bordered w-full bg-stone-100 ${
          meta.error && meta.touched ? "border-rose-500" : "border-gray-900"
        }`}
      />
      {meta.error && meta.touched && (
        <p className="pt-2 text-sm text-rose-600">{meta.error}</p>
      )}
    </div>
  );
};

export default CustomTextarea;
