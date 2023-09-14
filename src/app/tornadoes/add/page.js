import AddTornado from "@/app/components/tornadoes/AddTornado";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">Add new tornado</h1>
      <AddTornado />
    </section>
  );
};

export default Page;
