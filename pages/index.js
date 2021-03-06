import Head from "next/head";
import Layout from "@/components/Layouts/Layout";

import Banner from "@/components/Layouts/parts/Landing/Banner";
import Content from "@/components/Layouts/parts/Landing/Content";

export default function Home({ dataExplore, dataCarousel }) {
  return (
    <>
      <Head>
        <title>Twill Apps</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Banner />
        <Content dataExplore={dataExplore} dataCarousel={dataCarousel} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dataExplore = await fetch("https://jsonkeeper.com/b/YVY9").then((res) =>
    res.json()
  );

  const dataCarousel = await fetch("https://jsonkeeper.com/b/5B3J").then(
    (res) => res.json()
  );

  return {
    props: {
      dataExplore,
      dataCarousel,
    },
  };
}
