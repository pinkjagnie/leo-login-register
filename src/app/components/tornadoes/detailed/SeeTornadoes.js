"use client";

import { useEffect, useState } from "react";
import pb from "@/lib/pocketbase";

import SingleTornado from "./SingleTornado";

const SeeTornadoes = ({ user }) => {
  const [allTornadoes, setAllTornadoes] = useState();

  const getUserTornadoes = async (user) => {
    const records = await pb.collection("tornadoes").getFullList(undefined, {
      filter: `UserIdentificator = "${user}"`,
    });

    setAllTornadoes(records);
  };

  useEffect(() => {
    getUserTornadoes(user);
  }, [allTornadoes, user]);

  return (
    <>
      {allTornadoes && allTornadoes.length === 0 && (
        <p className="text-center font-medium text-xl pt-4">
          Sorry, there is no tornadoes
        </p>
      )}
      <div className="w-[90%] mx-auto py-10 flex items-center justify-center gap-6 flex-col md:grid md:grid-cols-2">
        {allTornadoes &&
          allTornadoes.map((tornado) => {
            return (
              <SingleTornado
                key={tornado.id}
                id={tornado.id}
                forAll={tornado.ForAll}
                userID={tornado.UserIdentificator}
                title={tornado.Title}
                shortMsg={tornado.ShortMessage}
                msg={tornado.Message}
                image={tornado.Attachment}
              />
            );
          })}
      </div>
    </>
  );
};

export default SeeTornadoes;
