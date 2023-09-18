import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";
import pb from "@/lib/pocketbase";

import CustomFileAttInput from "../../form/custom/CustomFileAttInput";

import { AiOutlineEdit } from "react-icons/ai";
import { LuImageMinus } from "react-icons/lu";

const ImageForForm = ({ tornado, imageUrl, setFieldValue }) => {
  const { user } = useAuth();

  const [openEditingImg, setOpenEditingImg] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");

  const router = useRouter();

  const openEditingImgHandler = () => {
    setOpenEditingImg((prevState) => !prevState);
  };

  const deleteImage = async () => {
    let delHelper = {
      Attachment: null,
    };

    await pb.collection("tornadoes").update(tornado.id, delHelper);

    setDeleteMsg("Image successfully removed!");

    const timeout = setTimeout(() => {
      router.push(`/tornadoes/see/${user.UserIdentificator}`);
      clearTimeout(timeout);
    }, 2000);
  };

  return (
    <>
      {tornado.Attachment && (
        <div className="pb-6">
          <p className="label">Attachment</p>
          <div className="flex justify-between w-[95%] mx-auto">
            {!deleteMsg && (
              <div className="flex flex-col items-center justify-start">
                <span>This tornado has an image:</span>
                <span>{tornado.Attachment}</span>
                <span className="pt-4">Here you can see a preview</span>
                <div className="flex items-center justify-between pt-6">
                  <p
                    className="btn btn-square btn-info mr-4"
                    onClick={openEditingImgHandler}
                  >
                    <AiOutlineEdit size={20} />
                  </p>
                  <p
                    className="btn btn-outline btn-error"
                    onClick={deleteImage}
                  >
                    <LuImageMinus size={20} />
                  </p>
                </div>
              </div>
            )}
            {deleteMsg && <p>{deleteMsg}</p>}
            <Image src={imageUrl} width={120} height={120} alt="image" />
          </div>
          {openEditingImg && (
            <CustomFileAttInput
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
          )}
        </div>
      )}
      {!tornado.Attachment && (
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
      )}
    </>
  );
};

export default ImageForForm;
