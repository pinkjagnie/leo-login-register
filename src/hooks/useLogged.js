"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import pb from "@/lib/pocketbase";

export default function useLogged() {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState();

  const { setUserID } = useAuth();

  useEffect(() => {
    async function checkLogged() {
      // const id = pb.authStore.model.id; => if user isn't logged in id will be undefined

      try {
        const id = pb.authStore.model?.id; // // if user isn't logged in model doesn't exist
        const user = await pb.collection("users").getOne(id);
        console.log(user);
        console.log(pb.authStore.isValid); // returns true if logged in
        setIsLogged(pb.authStore.isValid);
        setUserData(user);
        setUserID(user.UserIdentificator);
      } catch {
        setIsLogged(false);
      }
    }

    checkLogged();
  }, [isLogged]);

  return { isLogged, userData };
}
