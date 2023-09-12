"use server";

import pb from "@/lib/pocketbase";

export const createUser = async (values, actions) => {
  // const res = await fetch(pb)

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(values);
  actions.resetForm();
};
