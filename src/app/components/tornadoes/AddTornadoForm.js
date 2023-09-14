"use client";

import { useState } from "react";
import { Form, Formik } from "formik";

import pb from "@/lib/pocketbase";
import { tornadoSchema } from "@/schemas/index";

import CustomInput from "../form/custom/CustomInput";
import CustomTextarea from "../form/custom/CustomTextarea";
import CustomFileAttInput from "../form/custom/CustomFileAttInput";
import Message from "../form/Message";

const AddTornadoForm = () => {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (values, actions) => {
    console.log(values);

    const formData = new FormData();
    const enteredAtt = formData.append("Attachment", values.Attachment);
    console.log("formdata ", formData);

    const enteredTitle = values.Title;
    const enteredShortMsg = values.ShortMessage;
    const enteredMsg = values.Message;
    // const enteredAtt = "";

    console.log(enteredAtt);

    const data = {
      UserID: 1234,
      Title: enteredTitle,
      ShortMessage: enteredShortMsg,
      Message: enteredMsg,
      Attachment: enteredAtt,
    };

    try {
      const record = await pb.collection("tornadoes").create(data);

      console.log("record ", record);
      actions.resetForm();

      setMessage("Tornado successfully created!");
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong! " + error.data.message);
    }
  };

  return (
    <>
      {(message || errorMsg) && (
        <Message message={message} errorMsg={errorMsg} />
      )}
      <Formik
        initialValues={{
          Title: "",
          ShortMessage: "",
          Message: "",
          Attachment: "",
        }}
        validationSchema={tornadoSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="form-control w-[90%] md:w-[60%] lg:w-[50%] p-6 mx-auto mt-2 mb-14 border-2 border-stone-200 rounded-md bg-stone-200">
            <CustomInput label="Title *" name="Title" type="text" />
            <CustomInput
              label="Short message *"
              name="ShortMessage"
              type="text"
            />
            <CustomTextarea label="Message *" name="Message" type="text" />
            <CustomFileAttInput
              label="Attachment"
              name="Attachment"
              type="file"
              value={undefined}
              onChange={(event) => {
                setFieldValue("Attachment", event.currentTarget.files[0]);
              }}
            />
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
    </>
  );
};

export default AddTornadoForm;
