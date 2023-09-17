import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import LatestProduct from "@/Components/LatestProduct";
import RootLayout from "@/Components/Layouts/RootLayout";

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <Banner></Banner>
      <LatestProduct data={data.data}></LatestProduct>
      <Category></Category>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  return {
    props: { data },
  };
};
