import { useRouter } from "next/navigation";

import pb from "@/lib/pocketbase";

export default function useLogout() {
  const router = useRouter();

  function logout() {
    pb.authStore.clear();

    console.log(pb.authStore.isValid);

    // redirecting
    router.push("/");
  }

  return logout;
}
