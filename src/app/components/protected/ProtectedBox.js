"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

const ProtectedBox = () => {
  const { user } = useAuth();

  let logContent;

  if (user) {
    logContent = <p>Hello, dear {user.email}</p>;
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
