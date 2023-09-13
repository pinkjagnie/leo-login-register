import ProtectedBox from "../components/protected/ProtectedBox";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">
        This is a protected page
      </h1>
      <ProtectedBox />
    </section>
  );
};

export default Page;
