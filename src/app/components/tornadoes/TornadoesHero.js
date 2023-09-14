"use client";

import Link from "next/link";
import useLogged from "@/hooks/useLogged";

const TornadoesHero = () => {
  const { isLogged, userData } = useLogged();

  console.log("z komponentu ", isLogged);

  let logContent;

  if (isLogged) {
    logContent = (
      <p>
        Hello, dear {userData.email}. Below you can see and manage your
        tornadoes
      </p>
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
    <div className="text-center font-medium text-lg py-4">{logContent}</div>
  );
};

export default TornadoesHero;
