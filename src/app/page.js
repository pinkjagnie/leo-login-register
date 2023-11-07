import { WiTornado } from "react-icons/wi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-0 bg-slate-50">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto my-auto md:mt-16 text-center font-bold text-5xl">
        <h1>Welcome to the tornado side of your mind</h1>
        <h1 className="lg:pt-6">Here you can freely share your thoughts</h1>
      </div>
      <WiTornado
        size={500}
        className="hidden md:visible md:block md:absolute right-4 bottom-4 opacity-20 lg:h-[350px] lg:w-[auto]"
      />
    </main>
  );
}
