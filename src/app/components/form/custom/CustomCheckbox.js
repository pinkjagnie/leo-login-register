import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="pb-6 flex items-center justify-start">
        <input {...field} {...props} className="checkbox bg-stone-100" />
        <label className="label-text cursor-pointer pl-2">{label}</label>
      </div>
      {meta.error && meta.touched && (
        <p className="-mt-4 pb-6 text-sm text-rose-600">{meta.error}</p>
      )}
    </>
  );
};

export default CustomCheckbox;
