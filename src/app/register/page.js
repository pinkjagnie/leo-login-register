import RegisterForm from "../components/register/RegisterForm";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">Create an account</h1>
      <RegisterForm />
    </section>
  );
};

export default Page;
