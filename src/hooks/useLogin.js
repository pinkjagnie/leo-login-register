import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import pb from "@/lib/pocketbase";

export default function useLogin() {
  // const { setIsLoggedIn } = useAuth();
  const { user } = useAuth();
  const router = useRouter();

  async function login(email, password, actions) {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    console.log("authdata ", authData);
    console.log(pb.authStore.isValid);

    console.log(" user z auth context ", user);

    // authData {record, token}
    // authData.record - all infos from pb about currently logged in user (e.g.: UserIdentificator, email)

    actions.resetForm();

    // setIsLoggedIn(true);

    console.log(authStore.model);

    // router.push("/");
  }

  return login;
}
