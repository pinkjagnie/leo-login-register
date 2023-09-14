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

    console.log(records);

    setAllTornadoes(records);
  };

  useEffect(() => {
    getAllTornadoes();
  }, []);

  return (
    <div className="w-[90%] mx-auto py-10 flex items-center justify-center gap-6 flex-col md:flex-row lg:grid lg:grid-cols-2">
      {allTornadoes &&
        allTornadoes.map((tornado) => {
          return (
            <SingleTornado
              key={tornado.id}
              userID={tornado.UserID}
              title={tornado.Title}
              shortMsg={tornado.ShortMessage}
              msg={tornado.Message}
            />
          );
        })}
    </div>
  );
};

export default SeeTornadoes;
