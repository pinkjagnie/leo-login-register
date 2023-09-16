import Tornadoes from "../components/tornadoes/detailed/Tornadoes";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">Explore tornadoes</h1>
      <Tornadoes />
    </section>
  );
};

export default Page;
