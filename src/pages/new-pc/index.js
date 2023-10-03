import RootLayout from "@/Components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const NewPCPage = () => {
  const categories = [
    { name: "Processor", path: "processor" },
    { name: "Motherboard", path: "motherboard" },
    { name: "RAM", path: "ram" },
    { name: "Power-Supply-Unit", path: "power-supply-unit" },
    { name: "Storage-Device", path: "storage-device" },
    { name: "Monitor", path: "monitor" },
  ];
  const products = useSelector((state) => state.productReducer);
  console.log(products);
  const isButtonDisabled = products && products.length < 6;
  return (
    <div className="container  w-10/12 max-w-screen-xl py-3 mx-auto">
      <div className="w-10/12 mx-auto">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
              <span className="text-gray-500">{category.name}</span>
              <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
                <Link href={`/products/${category.path}`}>Choose</Link>
              </button>
            </div>
            <div>
              {products.map((product, index) => (
                <div key={index}>
                  {product.category === category.name && (
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <Image
                          src={product.image}
                          height={100}
                          width={100}
                          responsive
                          alt="product-image"
                        ></Image>
                      </div>
                      <div>
                        <h1 className="text-lg font-bold">
                          {product.productName}
                        </h1>
                        <p className="text-right text-base font-semibold">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            disabled={isButtonDisabled}
            onClick={() => alert("Your PC Build is Successful.")}
            className="text-lg font-medium bg-black disabled:bg-slate-500 disabled:cursor-not-allowed text-white py-2 rounded-md px-6"
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPCPage;

NewPCPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
