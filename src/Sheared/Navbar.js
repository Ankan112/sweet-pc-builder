import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <nav className="relative bg-white shadow  dark:bg-gray-800">
      <div className="container  w-10/12 max-w-screen-xl py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-xl font-semibold ">Sweet PC Builder</p>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } md:flex md:items-center`}
          >
            <div className="flex flex-col md:flex-row md:mx-1">
              <Link
                className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <Link
                className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                href="/new-pc"
              >
                PC Builder
              </Link>
              {session?.user ? (
                <>
                  <button
                    className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                  href="/login"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Search input on mobile screen */}
            <div className="my-4 md:hidden">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/processor"
          >
            Processor
          </Link>
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/motherboard"
          >
            Motherboard
          </Link>
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/ram"
          >
            RAM
          </Link>
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/power-supply-unit"
          >
            Power Supply Unit
          </Link>
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/storage-device"
          >
            Storage Device
          </Link>
          <Link
            className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="/products/monitor"
          >
            Monitor
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
