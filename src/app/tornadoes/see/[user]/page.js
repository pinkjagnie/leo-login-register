import SeeTornadoesBox from "@/app/components/tornadoes/SeeTornadoesBox";

const Page = async ({ params }) => {
  console.log("z params ", params.user);

  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <SeeTornadoesBox paramsUser={params.user} />
    </section>
  );
};

export default Page;
