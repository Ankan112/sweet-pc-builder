import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">404</h1>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn&#39;t exist.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <Link href="/">Take me home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
