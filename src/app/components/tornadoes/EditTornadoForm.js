"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";

import pb from "@/lib/pocketbase";
import { tornadoSchema } from "@/schemas/index";

import CustomInput from "../form/custom/CustomInput";
import CustomTextarea from "../form/custom/CustomTextarea";
import CustomFileAttInput from "../form/custom/CustomFileAttInput";
import Message from "../form/Message";

const EditTornadoForm = ({ tornado }) => {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  console.log(tornado.Attachment);

  const onSubmit = async (values, actions) => {
    console.log(values);

    const enteredTitle = values.Title;
    const enteredShortMsg = values.ShortMessage;
    const enteredMsg = values.Message;
    const enteredAtt = values.Attachment;

    const data = {
      UserID: 1234,
      Title: enteredTitle,
      ShortMessage: enteredShortMsg,
      Message: enteredMsg,
      Attachment: enteredAtt,
    };

    console.log(data);

    try {
      const record = await pb.collection("tornadoes").update(tornado.id, data);

      console.log("record ", record);
      actions.resetForm();

      setMessage("Tornado successfully edited!");

      const timeout = setTimeout(() => {
        router.push("/tornadoes/see");
        clearTimeout(timeout);
      }, 2000);
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
          Attachment: tornado.Attachment,
        }}
        validationSchema={tornadoSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="form-control w-[90%] md:w-[60%] lg:w-[50%] p-6 mx-auto mt-2 mb-14 border-2 border-stone-200 rounded-md bg-stone-200">
            <CustomInput
              label="Title *"
              name="Title"
              type="text"
              info="Length: 2-20 characters"
            />
            <CustomInput
              label="Short message *"
              name="ShortMessage"
              type="text"
              info="Length: 2-40 characters"
            />
            <CustomTextarea
              label="Message *"
              name="Message"
              type="text"
              info="Length: 2-200 characters"
            />
            <CustomFileAttInput
              label="Attachment"
              name="Attachment"
              type="file"
              info={`Max allowed size is 100KB. If the tornado has an image, adding a new one will automatically delete the current image. This tornado: ${
                tornado.Attachment ? "has an image" : "does not have an image"
              }.`}
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
