import pb from "@/lib/pocketbase";

import SeeTornadoes from "@/app/components/tornadoes/SeeTornadoes";

const getUserTornadoes = async (user) => {
  console.log("user z funkcji ", user);

  const records = await pb.collection("tornadoes").getFullList(undefined, {
    filter: `UserID = "${user}"`,
  });

  if (!records) {
    notFound();
  }

  console.log("records ", records);

  return records;
};

const Page = async ({ params }) => {
  const singleRecord = getUserTornadoes(params.user);

  console.log("z params ", params.user);

  const [tornadoes] = await Promise.all([singleRecord]);

  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">
        Here are your tornadoes
      </h1>
      <SeeTornadoes tornadoes={tornadoes} />
    </section>
  );
};

export default Page;
