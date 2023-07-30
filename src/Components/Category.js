import Link from "next/link";

const Category = () => {
  const categoryData = [
    {
      categoryName: "Processor",
      categoryRoute: "/products/processor",
    },
    {
      categoryName: "Motherboard",
      categoryRoute: "/products/motherboard",
    },
    {
      categoryName: "RAM",
      categoryRoute: "/products/ram",
    },
    {
      categoryName: "Power Supply Unit",
      categoryRoute: "/products/power-supply-unit",
    },
    {
      categoryName: "Storage Device",
      categoryRoute: "/products/storage-device",
    },
    {
      categoryName: "Monitor",
      categoryRoute: "/products/monitor",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container w-10/12 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {categoryData?.map((data, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <Link href={data?.categoryRoute}>
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <h2 className="title-font h-[100px] flex justify-center items-center font-medium text-3xl text-gray-900">
                    {data?.categoryName}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
