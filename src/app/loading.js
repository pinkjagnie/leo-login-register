const Loading = () => {
  return (
    <section className="min-h-[100vh] bg-slate-50 pt-64">
      <div className="flex items-center justify-center p-5">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      <h1 className="pt-6 text-center text-2xl font-semibold md:text-3xl">
        Loading...
      </h1>
      <h2 className="pt-4 pb-10 text-center text-xl font-semibold">
        please wait
      </h2>
    </section>
  );
};

export default Loading;
