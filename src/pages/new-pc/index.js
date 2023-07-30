import RootLayout from "@/Components/Layouts/RootLayout";

const NewPCPage = () => {
  return (
    <div>
      <h1>new pc page</h1>
    </div>
  );
};

export default NewPCPage;

NewPCPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
