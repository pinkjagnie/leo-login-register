import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import pb from "@/lib/pocketbase";

export default function useLogout() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();

  function logout() {
    pb.authStore.clear();

    console.log(pb.authStore.isValid);

    setIsLoggedIn(false);

    // redirecting
    router.push("/");
  }

  return logout;
}
