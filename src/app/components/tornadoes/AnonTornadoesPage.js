"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import pb from "@/lib/pocketbase";

import AnonSingleTornado from "./detailed/AnonSingleTornado";

const AnonTornadoesPage = () => {
  const [publicTornadoes, setPublicTornadoes] = useState();

  const getPublicTornadoes = async () => {
    const records = await pb.collection("tornadoes").getFullList(undefined, {
      filter: "ForAll = True",
    });

    setPublicTornadoes(records);
  };

  useEffect(() => {
    getPublicTornadoes();
  }, []);

  return (
    <section>
      <div>
        <h1 className="pt-6 pb-2 text-xl text-center font-bold">
          Here are list of public tornadoes
        </h1>
        {publicTornadoes && publicTornadoes.length === 0 && (
          <p className="w-[90%] mx-auto text-center font-medium text-xl pt-4">
            Sorry, there are no public tornadoes
          </p>
        )}
        <div className="w-[90%] mx-auto py-10 flex items-center justify-center gap-6 flex-col md:grid md:grid-cols-2">
          {publicTornadoes &&
            publicTornadoes.map((tornado) => {
              return (
                <AnonSingleTornado
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
      </div>
      <div className="w-[90%] mx-auto flex flex-col items-center justify-center pt-6 pb-10">
        <p className="pb-4 text-xl font-bold text-center">
          You are not logged in. If you want to see your tornadoes you have to
          login
        </p>
        <Link href="/login" className="btn btn-accent">
          Login
        </Link>
      </div>
    </section>
  );
};

export default AnonTornadoesPage;
