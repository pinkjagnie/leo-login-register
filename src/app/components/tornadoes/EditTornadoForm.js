"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";

import pb from "@/lib/pocketbase";
import { tornadoSchema } from "@/schemas/index";

import CustomInput from "../form/custom/CustomInput";
import CustomTextarea from "../form/custom/CustomTextarea";
import Message from "../form/Message";

const EditTornadoForm = ({ tornado }) => {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredTitle = values.Title;
    const enteredShortMsg = values.ShortMessage;
    const enteredMsg = values.Message;

    const data = {
      UserID: 1234,
      Title: enteredTitle,
      ShortMessage: enteredShortMsg,
      Message: enteredMsg,
    };

    console.log(data);

    try {
      const record = await pb.collection("tornadoes").update(tornado.id, data);

      console.log("record ", record);
      actions.resetForm();

      setMessage("Tornado successfully edited!");

      router.push("/tornadoes/see");
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
          Title: tornado.Title,
          ShortMessage: tornado.ShortMessage,
          Message: tornado.Message,
          // Attachment: ""
        }}
        validationSchema={tornadoSchema}
        onSubmit={onSubmit}
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
                Edit tornado
              </button>
            ) : (
              <button className="btn btn-active btn-accent text-slate-50 w-[80%] mx-auto block">
                <span className="loading loading-spinner text-slate-50"></span>
                Editing
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditTornadoForm;
