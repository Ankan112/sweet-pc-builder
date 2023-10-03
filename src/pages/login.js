import Navbar from "@/Sheared/Navbar";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form class="w-full max-w-md">
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              Log In
            </h1>

            <div
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://sweet-pc-builder.vercel.app/",
                })
              }
              class="mt-6"
            >
              <p class="flex cursor-pointer items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="github"
                />
                <span class="mx-2">Sign in with Github</span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
