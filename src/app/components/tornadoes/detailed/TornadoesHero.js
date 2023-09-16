import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const TornadoesHero = () => {
  const { user } = useAuth();

  return (
    <div className="w-[90%] mx-auto py-10">
      <p className="text-medium">What are you thinking about?</p>
      <div className="flex items-center justify-center gap-8 flex-col md:flex-row w-[90%] mx-auto py-8">
        <Link
          href={`/tornadoes/see/${user.UserIdentificator}`}
          className="btn btn-secondary w-[80%] md:w-[40%]"
        >
          See your tornadoes
        </Link>
        <Link
          href="/tornadoes/add"
          className="btn btn-accent w-[80%] md:w-[40%]"
        >
          Add new tornado
        </Link>
      </div>
    </div>
  );
};

export default TornadoesHero;
