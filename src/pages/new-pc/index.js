import RootLayout from "@/Components/Layouts/RootLayout";
import Link from "next/link";

const NewPCPage = () => {
  return (
    <div className="container  w-10/12 max-w-screen-xl py-3 mx-auto">
      <div className="w-10/12 mx-auto">
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">Processor</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/processor">Choose</Link>
          </button>
        </div>
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">Motherboard</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/motherboard">Choose</Link>
          </button>
        </div>
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">RAM</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/ram">Choose</Link>
          </button>
        </div>
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">Power Supply Unit</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/power-supply-unit">Choose</Link>
          </button>
        </div>
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">Storage Device</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/storage-device">Choose</Link>
          </button>
        </div>
        <div className="flex border-t border-b mb-6 px-8 items-center border-gray-200 py-2">
          <span className="text-gray-500">Monitor</span>
          <button className="ml-auto bg-blue-600 text-white font-medium rounded-sm p-2 ">
            <Link href="/products/monitor">Choose</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="text-lg font-medium bg-black text-white py-2 rounded-md px-6">
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
