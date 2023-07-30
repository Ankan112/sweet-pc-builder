import Link from "next/link";

const LatestProduct = ({ data }) => {
  console.log(data);
  return (
    <section className="text-gray-600 container w-10/12 max-w-screen-xl  mx-auto body-font">
      <div className="container px-5 py-24 mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-center mb-10">
            Our Feature Products
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.slice(0, 6).map((product) => (
            <div key={product._id} className="p-4 md:w-1/3">
              <Link href={`/products/${product.category.toLowerCase()}`}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-base title-font font-medium text-gray-400 mb-1">
                      {product.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {product.productName}
                    </h1>

                    <div className="flex items-center flex-wrap ">
                      <p className="text-lg font-semibold">$ {product.price}</p>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <div className="mr-1">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/deco/48/star.png"
                            alt="star"
                          />
                        </div>{" "}
                        {product.averageRating}
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {product.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
