import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import pb from "@/lib/pocketbase";

export default function useLogin() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();

  async function login(email, password, actions) {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    console.log("authdata ", authData);
    console.log(pb.authStore.isValid);

    actions.resetForm();

    setIsLoggedIn(true);

    router.push("/");
  }

  return login;
}
