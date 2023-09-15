"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import pb from "@/lib/pocketbase";

import SingleTornado from "./SingleTornado";

const SeeTornadoes = ({ tornadoes }) => {
  // const [allTornadoes, setAllTornadoes] = useState();

  // const { userID } = useAuth();

  // const getAllTornadoes = async () => {
  //   const records = await pb.collection("tornadoes").getFullList({
  //     sort: "-created",
  //   });

  //   setAllTornadoes(records);
  // };

  // useEffect(() => {
  //   getAllTornadoes();
  // }, [allTornadoes]);

  useEffect(() => {}, [tornadoes]);

  return (
    <div className="w-[90%] mx-auto py-10 flex items-center justify-center gap-6 flex-col md:flex-row lg:grid lg:grid-cols-2">
      {tornadoes && tornadoes.length === 0 && (
        <p className="text-center font-medium text-lg">
          Sorry, there is no tornadoes
        </p>
      )}
      {tornadoes &&
        tornadoes.map((tornado) => {
          return (
            <SingleTornado
              key={tornado.id}
              id={tornado.id}
              forAll={tornado.ForAll}
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
