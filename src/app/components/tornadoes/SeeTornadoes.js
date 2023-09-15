"use client";

import { useEffect, useState } from "react";
import pb from "@/lib/pocketbase";

import SingleTornado from "./SingleTornado";

const SeeTornadoes = () => {
  const [allTornadoes, setAllTornadoes] = useState();

  const getAllTornadoes = async () => {
    const records = await pb.collection("tornadoes").getFullList({
      sort: "-created",
    });

    setAllTornadoes(records);
  };

  useEffect(() => {
    getAllTornadoes();
  }, [allTornadoes]);

  return (
    <div className="w-[90%] mx-auto py-10 flex items-center justify-center gap-6 flex-col md:flex-row lg:grid lg:grid-cols-2">
      {allTornadoes &&
        allTornadoes.map((tornado) => {
          return (
            <SingleTornado
              key={tornado.id}
              id={tornado.id}
              userID={tornado.UserID}
              title={tornado.Title}
              shortMsg={tornado.ShortMessage}
              msg={tornado.Message}
              image={tornado.Attachment}
            />
          );
        })}
    </div>
  );
};

export default SeeTornadoes;
