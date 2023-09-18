import { useEffect, useState } from "react";

import pb from "@/lib/pocketbase";

import EditTornadoForm from "./EditTornadoForm";

const EditTornado = ({ tornado }) => {
  const [imageUrl, setImageUrl] = useState("");

  const getImageUrl = async (id) => {
    const record = await pb.collection("tornadoes").getOne(id);
    const filename = record.Attachment; // returns a string
    const url = pb.files.getUrl(record, filename);

    setImageUrl(url);
  };

  useEffect(() => {
    getImageUrl(tornado.id);
  }, []);

  return (
    <div className="w-[90%] mx-auto pb-10">
      <p className="pt-10 text-xs italic text-center">
        * - fields are required
      </p>
      {}
      <EditTornadoForm tornado={tornado} imageUrl={imageUrl} />
    </div>
  );
};

export default EditTornado;
