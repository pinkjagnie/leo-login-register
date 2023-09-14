"use client";

import { Form, Formik } from "formik";

import { tornadoSchema } from "@/schemas/index";

import CustomInput from "../form/custom/CustomInput";
import CustomTextarea from "../form/custom/CustomTextarea";

const AddTornadoForm = () => {
  return (
    <Formik
      initialValues={{
        Title: "",
        ShortMessage: "",
        Message: "",
        // Attachment: ""
      }}
      validationSchema={tornadoSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-control w-[90%] md:w-[60%] lg:w-[50%] p-6 mx-auto mt-2 mb-14 border-2 border-stone-200 rounded-md bg-stone-200">
          <CustomInput label="Title *" name="Title" type="text" />
          <CustomInput
            label="Short message *"
            name="ShortMessage"
            type="text"
          />
          <CustomTextarea label="Message *" name="Message" type="text" />
          {!isSubmitting ? (
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-outline bg-zinc-400 w-[80%] mx-auto block"
            >
              Add new tornado
            </button>
          ) : (
            <button className="btn btn-active btn-accent text-slate-50 w-[80%] mx-auto block">
              <span className="loading loading-spinner text-slate-50"></span>
              Adding
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddTornadoForm;
