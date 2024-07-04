import Head from "next/head";
import GlobalStyles from "./GlobalStyles";

const Home = () => {
  return (
    <>
      <Head>
        <title>Monster Hunter Now Tools - Event</title>
      </Head>
      <GlobalStyles />
      <main>
        <iframe
          id="mhnquest"
          src="https://mhn.quest"
          style={{
            display: "block",
            width: "100vw",
            height: "100vh",
          }}
        ></iframe>
      </main>
    </>
  );
};

export default Home;

