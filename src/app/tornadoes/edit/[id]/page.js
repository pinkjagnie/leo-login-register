import EditTornado from "@/app/components/tornadoes/EditTornado";

import pb from "@/lib/pocketbase";

const getSingleRecord = async (id) => {
  const record = await pb.collection("tornadoes").getOne(id);

  if (!record) {
    notFound();
  }

  console.log(record);

  return record;
};

const Page = async ({ params }) => {
  const singleRecord = getSingleRecord(params.id);

  const [tornado] = await Promise.all([singleRecord]);

  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">
        Below you can edit your tornado
      </h1>
      <EditTornado tornado={tornado} />
    </section>
  );
};

export default Page;
