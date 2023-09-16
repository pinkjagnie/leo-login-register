"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import TornadoesHero from "./TornadoesHero";

import { WiTornado } from "react-icons/wi";

const Tornadoes = () => {
  const { user } = useAuth();

  let logContent;

  if (user) {
    logContent = (
      <>
        <p>
          Hello, dear {user.email}. Below you can see and manage your tornadoes
        </p>
        <TornadoesHero />
      </>
    );
  } else {
    logContent = (
      <>
        <p className="pb-4">
          You are not logged in! You can not see your tornadoes
        </p>
        <Link href="/login" className="btn btn-accent">
          Login
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="text-center font-medium text-lg py-4">{logContent}</div>
      <WiTornado
        size={500}
        className="hidden md:visible md:block md:absolute right-4 bottom-4 lg:right-2 lg:bottom-2 opacity-30 lg:h-[250px] lg:w-[auto]"
      />
    </>
  );
};

export default Tornadoes;
