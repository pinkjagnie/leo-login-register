"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import AddTornado from "./detailed/AddTornado";

const AddTornadoBox = () => {
  const { user } = useAuth();

  let pageContent;

  if (user) {
    pageContent = (
      <>
        <h1 className="py-4 text-xl text-center font-bold">Add new tornado</h1>
        <AddTornado />
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

export default AddTornadoBox;
