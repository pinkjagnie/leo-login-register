import { useState } from "react";
import { useRouter } from "next/navigation";

import pb from "@/lib/pocketbase";

import { LuImageMinus } from "react-icons/lu";

const DeleteImage = ({ id }) => {
  const [text, setText] = useState(false);

  const router = useRouter();

  let dupa = "documents";

  const deleteAttachment = async (id) => {
    try {
      await pb.collection("tornadoes").update(id, {
        dupa: null,
      });

      setText(true);

      // setMessage("Attachment deleted!");

      const timeout = setTimeout(() => {
        router.push("/tornadoes/see");
        clearTimeout(timeout);
      }, 2000);
    } catch (error) {
      console.log(error);
      // setErrorMsg("Something went wrong! " + error.data.message);
    }
  };

  return (
    <div className="w-[90%] mx-auto flex items-center justify-center -mt-4 pb-6">
      <div className="pr-4 text-center">
        {text ? (
          <>
            <p>This tornado has an image.</p> <p>Want to remove it?</p>
          </>
        ) : (
          <p>Image has been removed</p>
        )}
      </div>
      <button
        className="btn btn-outline btn-error"
        onClick={() => deleteAttachment(id)}
      >
        <LuImageMinus size={20} />
      </button>
    </div>
  );
};

export default DeleteImage;
