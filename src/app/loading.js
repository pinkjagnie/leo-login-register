const Loading = () => {
  return (
    <section className="min-h-[100vh]">
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      <h1 className="mt-6 text-center text-2xl font-semibold md:text-3xl">
        Loading...
      </h1>
      <h2 className="mb-10 text-center text-xl font-semibold">please wait</h2>
    </section>
  );
};

export default Loading;
