"use client";

import Link from "next/link";

const Error = () => {
  return (
    <section className="flex items-center min-h-[100vh] p-16 pt-20">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Ups, something went wrong!
          </p>
          <Link
            href="/"
            className="mt-10 btn btn-active btn-accent hover:bg-slate-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
