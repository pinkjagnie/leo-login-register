import TornadoesBoxPage from "@/app/components/tornadoes/TornadoesBoxPage";

const Page = async ({ params }) => {
  console.log("z params ", params.user);

  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <TornadoesBoxPage paramsUser={params.user} />
    </section>
  );
};

export default Page;
