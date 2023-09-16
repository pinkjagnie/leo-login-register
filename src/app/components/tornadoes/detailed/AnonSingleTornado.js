import { useState } from "react";

import ImageModal from "./ImageModal";

import { CiImageOn, CiImageOff } from "react-icons/ci";

import pb from "@/lib/pocketbase";

const AnonSingleTornado = ({
  id,
  forAll,
  userID,
  title,
  shortMsg,
  msg,
  image,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const getImageUrl = async (id) => {
    console.log(id);
    const record = await pb.collection("tornadoes").getOne(id);
    const filename = record.Attachment; // returns a string
    const url = pb.files.getUrl(record, filename);
    console.log(url);

    setImageUrl(url);
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <div className="flex items-center justify-end">
            <div className="badge badge-ghost">
              {forAll === true ? "public" : "private"}
            </div>
          </div>
          <h2 className="card-title">{title}</h2>
          <span className="text-xs text-gray-800 text-right italic">
            {userID}
          </span>
          <p className="text-sm italic">{shortMsg}</p>
          <p className="pt-2">Whole message: {msg}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-secondary hover:opacity-60">
              {image ? (
                <CiImageOn size={25} onClick={() => getImageUrl(id)} />
              ) : (
                <div className="lg:tooltip" data-tip="There is no image">
                  <CiImageOff size={25} />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ImageModal imageUrl={imageUrl} closeModalHandler={closeModalHandler} />
      )}
    </>
  );
};

export default AnonSingleTornado;
