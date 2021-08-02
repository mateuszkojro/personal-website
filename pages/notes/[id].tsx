import { useRouter } from "next/router";
// import Notebook from "../../components/Notebook";

export default () => {
  const router = useRouter();

  const post = router.query.id;
  if (!post) return <p></p>;

  return (
    <>
      <h1>{post}</h1>
      <p>Some text</p>
      {/* <Notebook url={String.raw`https://raw.githubusercontent.com/mateuszkojro/quantum/main/basics.ipynb`} /> */}
    </>
  );
};
