"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import EditTornado from "./detailed/EditTornado";

const EditTornadoBox = ({ tornado }) => {
  const { user } = useAuth();

  let pageContent;

  if (user) {
    pageContent = (
      <>
        <h1 className="py-4 text-xl text-center font-bold">
          Below you can edit your tornado
        </h1>
        <EditTornado tornado={tornado} />
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

  return <div>{pageContent}</div>;
};

export default EditTornadoBox;
