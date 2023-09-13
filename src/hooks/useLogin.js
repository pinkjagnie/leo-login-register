import { useRouter } from "next/navigation";

import pb from "@/lib/pocketbase";

export default function useLogin() {
  const router = useRouter();

  async function login(email, password, actions) {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    console.log("authdata ", authData);
    console.log(pb.authStore.isValid);

    actions.resetForm();

    router.push("/");
  }

  return login;
}
