"use client";

import Link from "next/link";
import useLogged from "@/hooks/useLogged";

const ProtectedBox = () => {
  const { isLogged, userData } = useLogged();

  console.log("z komponentu ", isLogged);

  let logContent;

  if (isLogged) {
    logContent = <p>Hello, dear {userData.email}</p>;
  } else {
    logContent = (
      <>
        <p className="pb-4">
          You are not logged in! You do not have access to this page
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

export default ProtectedBox;
