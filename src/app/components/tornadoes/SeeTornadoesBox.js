"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import SeeTornadoes from "./detailed/SeeTornadoes";

const ListTornadoesBox = ({ paramsUser }) => {
  const { user } = useAuth();

  let pageContent;

  if (user) {
    pageContent = (
      <>
        <h1 className="py-4 text-xl text-center font-bold">
          Here are your tornadoes
        </h1>
        <SeeTornadoes user={paramsUser} />
      </>
    );
  } else {
    pageContent = (
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-10 pb-4 text-xl text-center font-bold">
          You are not logged in! You do not have access to this page
        </h1>
        <Link href="/login" className="btn btn-accent">
          Login
        </Link>
      </div>
    );
  }

  return <>{pageContent}</>;
};

export default ListTornadoesBox;
