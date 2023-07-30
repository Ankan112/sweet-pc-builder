import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import LatestProduct from "@/Components/LatestProduct";
import RootLayout from "@/Components/Layouts/RootLayout";

export default function Home({ data }) {
  console.log(data.data.slice(0, 6));
  return (
    <>
      <Banner></Banner>
      <LatestProduct></LatestProduct>
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
  console.log(data);
  return {
    props: { data },
  };
};
