import { useRouter } from "next/navigation";
// import { useQuery } from "react-query";

import pb from "@/lib/pocketbase";

export default function useLogout() {
  const router = useRouter();

  function logout() {
    pb.authStore.clear();

    console.log(pb.authStore.isValid);

    // redirecting
    router.push("/");
  }

  // return useQuery(
  // { queryFn: logout, queryKey: ["logout"] }
  // { refetchOnMount: true }
  // );

  return logout;
}
