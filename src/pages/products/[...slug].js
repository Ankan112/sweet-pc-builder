import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const ProductDetailsPage = ({ data }) => {
  console.log(data?.data);
  return (
    <div className="container w-10/12 max-w-screen-xl h-screen flex items-center  mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="flex justify-center items-center">
          <img
            className="lg:h-[400px] md:h-[400px] w-full object-cover object-center"
            src={data?.data?.image}
            alt="blog"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {data?.data?.category}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {data?.data?.productName}
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">
                {data?.data?.averageRating} Ratings
              </span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed font-medium">
            {data?.data?.description}
          </p>

          <div className=" gap-5 my-2 text-lg font-medium">
            <h2>Status - {data?.data?.status}</h2>
            <h2>Review - {data?.data?.reviews}</h2>
            <h2>Individual Rating - {data?.data?.individualRating}</h2>
          </div>
          <div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Brand</span>
              <span className="ml-auto text-gray-900">
                {data?.data?.keyFeatures?.brand}
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Model</span>
              <span className="ml-auto text-gray-900">
                {data?.data?.keyFeatures?.model}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Specification</span>
              <span className="ml-auto text-gray-900">
                {data?.data?.keyFeatures?.specification}
              </span>
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              ${data?.data?.price}
            </span>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy Now
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { slug: [product._id] },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { slug } = params;
  const id = slug[1];
  console.log(`id:${id}`);
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
};
