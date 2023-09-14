import SeeTornadoes from "@/app/components/tornadoes/SeeTornadoes";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">
        Here are your tornadoes
      </h1>
      <SeeTornadoes />
    </section>
  );
};

export default Page;
