import RootLayout from "@/Components/Layouts/RootLayout";
import { useRouter } from "next/router";

const ProductDetailsPage = ({ data }) => {
  console.log(data);
  const categoryName = useRouter();
  return (
    <div>
      <h1>specific product page {categoryName.query.productCategory}</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const categories = [
    "processor",
    "monitor",
    "ram",
    "motherboard",
    "storage-device",
    "power-supply-unit",
  ];
  const paths = categories.map((category) => ({
    params: { productCategory: category },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { productCategory } = params;
  console.log(productCategory);
  const res = await fetch(
    `http://localhost:3000/api/products/${productCategory}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};
