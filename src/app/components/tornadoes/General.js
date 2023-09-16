"use client";

import { useAuth } from "@/context/AuthContext";

import AnonTornadoesPage from "./AnonTornadoesPage";
import UserTornadoesPage from "./UserTornadoesPage";

const General = () => {
  const { user } = useAuth();

  let pageContent;

  if (user) {
    pageContent = <UserTornadoesPage />;
  } else {
    pageContent = <AnonTornadoesPage />;
  }

  return <section>{pageContent}</section>;
};

export default General;
