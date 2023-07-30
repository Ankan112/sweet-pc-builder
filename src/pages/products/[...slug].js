import RootLayout from "@/Components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = ({ data }) => {
  console.log(data);
  const id = useRouter();
  //   console.log(id?.query?.slug);
  return (
    <div>
      <h1>product details page here! {id.query.slug}</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products/`);
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { slug: [product._id] },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const id = slug[1];
  //   const { id } = params;
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
